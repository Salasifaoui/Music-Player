import { FlatList,View,TextInput,StyleSheet,Text } from 'react-native';

import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function SearchScreen() {
  const [search, setSearch] = useState('')
  return (
    <SafeAreaView>
   
    <View style={styles.header}>
      <FontAwesome name="search" size={24} color="#E64F4F" />
      <TextInput value={search} onChangeText={setSearch} style={styles.search} placeholder="Search" />
      <Text onPress={() => setSearch('')} style={styles.cancel}>Cancel</Text>
    </View>
    <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} showPlay={true} />}
       />
  
    </SafeAreaView>
      
   
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  search: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#B59999',
    borderRadius: 10,
    height: 40,
    padding: 10,
    fontSize: 16

  },
  cancel:{
    color: '#E64F4F',
    fontWeight: 'bold',
    fontSize: 16

  }
})

