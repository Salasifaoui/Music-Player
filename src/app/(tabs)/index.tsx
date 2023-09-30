import { FlatList, StyleSheet, View } from "react-native";

import { useState } from "react";
import { tracks } from "../../../assets/data/tracks";
import TrackListItem from "../../components/TrackListItem";

export default function TabOneScreen() {
  const [showSon, setShowSon] = useState(false);
  const [track, setTrack] = useState(tracks[0]);
  return (
    <View style={{ flex: 1, margin: 5 }}>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  play: {
    position: "absolute",
    bottom: 0,

    width: "100%",
    backgroundColor: "#D1543E",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
