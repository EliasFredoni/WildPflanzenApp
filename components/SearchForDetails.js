import { TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';

export default function SecoundScreen({navigation}) {
  return (
    <View style={styles.container}>

    <TouchableOpacity>
    <View style={styles.plantsSearch}>
    <Text style={styles.text} onPress={() => navigation.navigate("Suche")}>NAMEN</Text>
    <Image source={require('../assets/ausweis.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>

<View style={styles.littleContainer}>
    <TouchableOpacity >
      <View style={styles.plantsOne}>
    <Text style={styles.text} onPress={() => navigation.navigate("Verwendung")}>BLATT</Text>
    <Image source={require('../assets/plants.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.plantsTwo}>
    <Text style={styles.text} onPress={() => navigation.navigate("Zubereitung")}>BLÜTE</Text>
    <Image source={require('../assets/lavender.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>
</View>

<View style={styles.littleContainerTwo}>
    <TouchableOpacity>
    <View style={styles.plantsThree}>
    <Text style={styles.text}onPress={() => navigation.navigate("Heilung")}>STÄNGEL/STAMM</Text>
    <Image source={require('../assets/ast.png')} style={styles.image}></Image>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={styles.plantsFour}>
    <Text style={styles.text} onPress={() => navigation.navigate("Steckbrief")}>FRUCHT</Text>
    <Image source={require('../assets/fruchte.png')} style={styles.image}></Image>
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
    paddingHorizontal: 45,
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
    paddingHorizontal: 10,
    padding: 10,
    margin: 20,
    
  },
  plantsFour:{
    backgroundColor: '#DDBB42',
    borderRadius: 10,
    paddingBottom: 110,
    paddingHorizontal: 40,
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
    bottom: 2,
    width: 120,
    height: 120,

  }
});