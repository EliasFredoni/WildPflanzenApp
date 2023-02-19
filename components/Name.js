import { TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import Steckbrief from './Steckbrief';
import jsonPlants from '../jsonPlants.json';


export default function Name() {  


  return (
    <View style={styles.container}>
<FlatList 
        //numColumns={2}
        data={jsonPlants}
        renderItem={({item}) => (
          <Steckbrief item={item}/>
        )}/>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
      text:{
        margin: 10,
        color: 'white',
      },
});