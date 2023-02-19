import { Button, TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';
import React from 'react';

export default function Steckbrief({item}) {
  return (

<View style={styles.container}>

    <View style={styles.littleContainer}>
    <View style={styles.icon}>
    <Image source={require('../assets/birke.png')} style={styles.image}></Image>
    </View>
    <View>
        <Text style={styles.name}>NAME: {item.name}</Text>
        <Text style={styles.name}>LATEIN: Betula </Text>
        <Text style={styles.name} >FAMILIE: Birkengewächs</Text>
    </View>
    </View>

    <View style={styles.sammelzeit}>
        <Text style={styles.textTwo}>SAMMELZEIT</Text>
        <Text>{item.verwendung}</Text>
    </View>

<View>
    <View>
        <Text style={styles.text}>EIGENSCHAFTEN</Text>
    </View>
    <View>
        <Text style={styles.text}>HEILUNG, VERWENDUNG UND ZUBEREITUNG</Text>
        <Text>{item.zubereitung}</Text>
    </View>
</View>

</View>

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    littleContainer:{
        flexDirection: 'row',
        padding: 25,
        borderRadius: 10,
    },
    image:{
      position: 'absolute',
      left: 5,
      bottom: 2,
      width: 120,
      height: 120,
    },
    name:{
        marginHorizontal: 45,
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    icon:{
        padding: 50,
    },
    sammelzeit:{
        backgroundColor: 'white',
        paddingBottom: 50,
        paddingHorizontal: 115,
        marginVertical: -30,
        borderRadius: 10,
    },
    textTwo:{
        paddingTop: 5,
    },
    text:{
        color: 'white',
        paddingHorizontal: 60,
        paddingBottom: 110,
        paddingTop: 5,
        margin: 5,
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'white',
    },
  });