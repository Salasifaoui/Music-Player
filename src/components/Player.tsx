import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackListItem from './TrackListItem'

export default function Player({ track}) {
  return (
    <View style={styles.container}>
    <TrackListItem track={track} showPlay={true} color='#1E621E' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       // position: 'absolute',
       // top: -75,
        width: '100%',
        bottom: 0,
        height: 75,
        
       // padding: 20,
      },
})