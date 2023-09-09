import { FlatList, TouchableOpacity,View,StyleSheet } from 'react-native';

import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import Player from '../../components/Player';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [showSon, setShowSon] = useState(false);
  const [track, setTrack] = useState(tracks[0]);
  return (
   <View style={{flex: 1, margin: 5}}>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            setTrack(item);
            setShowSon(true);
          }}>
        <TrackListItem track={item}  />
        </TouchableOpacity>
        )}
       />
       {
        showSon && 
         
          <Player track={track} />
          
      
       }
   </View>
  );
}
const styles = StyleSheet.create({
  play: {
    position: 'absolute',
    bottom: 0,
    
    width: '100%',
    //backgroundColor: '#D1543E',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
   

  }
})

