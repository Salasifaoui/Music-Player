import { FontAwesome } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { usePlayerContext } from "../providers/PlayerProvider";
import { AVPlaybackSource, AVPlaybackStatus, Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

export default function Player() {
  const [sound, setSound] = useState<Sound>();
  const [isPlayed, setIsPlayed] = useState(false);
  const { track } = usePlayerContext();
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    playTrack();
  }, [track]);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playTrack = async () => {
    if (sound) await sound.unloadAsync();
    if (!track?.preview_url) return;
    console.log("play", track.id);
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: track.preview_url,
    });
    setSound(newSound);

    newSound.setOnPlaybackStatusUpdate(onplaybackStatusUpdate);
    await newSound.playAsync();
  };

  const onplaybackStatusUpdate = (status: AVPlaybackStatus) => {
    console.log(status);
    if (status.isLoaded && status.isPlaying) setIsPlayed(true);
  };

  const onPlayPause = async () => {
    if (!sound) return;
    if (isPlayed) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };
  if (!track) return null;
  const image = track.album.images[0];
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        {image && <Image source={{ uri: image.url }} style={styles.image} />}
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{track.name}</Text>
          <Text style={styles.subtitle}>{track.artists[0].name}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name={favorites ? "heart-o" : "heart"}
            size={20}
            color="white"
            style={{ marginHorizontal: 10 }}
            onPress={() => setFavorites(!favorites)}
          />
          <FontAwesome
            disabled={!track?.preview_url}
            name={isPlayed ? "pause" : "play"}
            size={22}
            onPress={onPlayPause}
            color={track?.preview_url ? "white" : "gray"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -75,
    width: "100%",
    height: 75,
    padding: 10,
  },
  player: {
    backgroundColor: "#286660",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    padding: 3,
    paddingRight: 15,
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "lightgray",
    fontSize: 12,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 5,
  },
  playlist: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    alignItems: "center",
  },
});
