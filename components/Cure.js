import { Button, TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';

export default function Cure() {
  return (
    <View style={styles.container}>

    <TouchableOpacity >
   <View style={styles.head}>
   <Image source={require('../assets/Kopf.png')} style={styles.image}></Image>
   </View>
   </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.arms}>
      <Image source={require('../assets/Korpus.png')} style={styles.imageTwo}></Image>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.knies}>
    <Image source={require('../assets/Knies.png')} style={styles.imageThree}></Image>
    </View>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    head:{
      backgroundColor: 'green',
      padding: 70,
      marginTop: 10,
    },
    arms:{
    backgroundColor: 'green',
    padding: 70,
    marginTop: 10,
    },
    knies:{
    backgroundColor: 'green',
    padding: 50,
    },
   image:{
    bottom: 5,
   },
    imageTwo:{
    position: 'absolute',
    bottom: 25,
    left: -180,
    },
    imageThree:{
    postition: 'absolue',
    bottom: 40,
    left: 3,
    },
});