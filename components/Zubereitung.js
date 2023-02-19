import { TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';

export default function Zubereitung({navigation}) {
  return (
    <View style={styles.container}>

    <TouchableOpacity>
    <View style={styles.plantsSearch}>
    <Text style={styles.text} onPress={() => navigation.navigate("Plants")}>SUCHE NACH NAMEN</Text>
    <Image source={require('../assets/lupe.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>

<View style={styles.littleContainer}>
    <TouchableOpacity >
      <View style={styles.plantsOne}>
    <Text style={styles.text} onPress={() => navigation.navigate("Blatt")}>KOCHEN</Text>
    <Image source={require('../assets/kochen.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.plantsTwo}>
    <Text style={styles.text} onPress={() => navigation.navigate("Blüte")}>SALAT</Text>
    <Image source={require('../assets/salat.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>
</View>

<View style={styles.littleContainerTwo}>
    <TouchableOpacity>
    <View style={styles.plantsThree}>
    <Text style={styles.text}onPress={() => navigation.navigate("Stamm")} >GEWÜRZ</Text>
    <Image source={require('../assets/gewurze.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.plantsFour}>
    <Text style={styles.text} onPress={() => navigation.navigate("Knospe")}>TEE</Text>
    <Image source={require('../assets/tea.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>
</View>


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
  littleContainer:{
    flexDirection: "row",
  },
  plantsSearch:{
    backgroundColor: '#DDBB42',
    borderRadius: 10,
    paddingBottom: 100,
    padding: 10,
    margin: 20,
  },
  plantsOne:{
    backgroundColor: '#DDBB42',
    borderRadius: 10,
    paddingBottom: 110,
    paddingHorizontal: 45,
    padding: 10,
    margin: 20,
  },
  plantsTwo:{
    backgroundColor: '#DDBB42',
    borderRadius: 10,
    paddingBottom: 110,
    paddingHorizontal: 45,
    padding: 10,
    margin: 20,
  },
  littleContainerTwo:{
    flexDirection: "row",
  },
  plantsThree:{
    backgroundColor: '#DDBB42',
    borderRadius: 10,
    paddingBottom: 110,
    paddingHorizontal: 45,
    padding: 10,
    margin: 20,
    
  },
  plantsFour:{
    backgroundColor: '#DDBB42',
    borderRadius: 10,
    paddingBottom: 110,
    paddingHorizontal: 55,
    padding: 10,
    margin: 20,
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textShadow: 3,
    zIndex: 1,
  },
  image:{
    position: 'absolute',
    left: 10,
    bottom: 1,
    width: 120,
    height: 120,

  }
});