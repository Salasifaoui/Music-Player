import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import TrackListItem from "./TrackListItem";
import { usePlayerContext } from "../providers/PlayerProvider";
import { FontAwesome } from "@expo/vector-icons";

export default function Player() {
  const { track } = usePlayerContext();
  const [favorites, setFavorites] = useState(false);
  if (!track) return null;
  const image = track.album.images[0];
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <View style={{ flexDirection: "row", maxWidth: "50%" }}>
          {image && <Image source={{ uri: image.url }} style={styles.image} />}
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{track.name}</Text>
            <Text style={styles.subtitle}>{track.artists[0].name}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
        <FontAwesome
          name={favorites ? "heart-o" : "heart"}
          size={20}
          color="white"
          style={{ marginHorizontal: 10 }}
          onPress={() => setFavorites(!favorites)}
        />
        <FontAwesome
          disabled={!track?.preview_url}
          name="play"
          size={22}
          // style={{ marginHorizontal: 10 }}
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

    fontWeight: "bold",
    color: "white",

  },
  subtitle: {
    
    color: "white",
  },
  image: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 10,
  },
  playlist: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    alignItems: "center",
  },
});
