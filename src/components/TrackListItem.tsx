import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Track } from "../types";
import { FontAwesome } from "@expo/vector-icons";

type TrackListItemProps = {
  track: Track;
  showPlay?: boolean;
  color?: string;
};

export default function TrackListItem({
  track,
  showPlay = false,
  color = '#D1543E'
}: TrackListItemProps) {
  const [favorites, setFavorites] = useState(false);
  return (
    
    <View style={[styles.container,{backgroundColor: color}]} >
      <View style={{ flexDirection: "row", maxWidth: '50%' }}>
        <Image
          source={{ uri: track.album.images[0]?.url }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{track.name}</Text>
          <Text style={styles.subtitle}>{track.artists[0].name}</Text>
        </View>
      </View>

      {showPlay && (
        <View style={styles.playlist}>
          <FontAwesome
            name={favorites ? "heart-o" : "heart"}
            size={24}
            color="white"
            onPress={() => setFavorites(!favorites)}
          />
          <FontAwesome name="play" size={24} color="white" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
    padding: 6,
    borderRadius: 10,
    flexDirection: "row",
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    numberOfLines: 1,
  },
  subtitle: {
    fontSize: 14,
    color: "white",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  playlist: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    alignItems: "center",
  },
});
