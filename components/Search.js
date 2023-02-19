import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';
import jsonPlants from '../jsonPlants.json'

export default function Search() {

    const navigation = useNavigation();

    useEffect(() =>{
navigation.setOptions({
    headerLargeTitle: true,
    headerSearchBarOptions:{
        placeholder: "Suche",
    }
    })
}); 


    return (
        
        <View style={styles.container}>
    <FlatList 
            data={jsonPlants}
            renderItem={({item}) => (
                <ScrollView>
              <Text style={styles.text}>{item.name}</Text>
              </ScrollView>
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
            marginBottom: -40,
            padding: 40,
            fontSize: 25,
            color: 'white',
          },
    });
