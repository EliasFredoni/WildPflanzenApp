import { Button, TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <TouchableOpacity>
      <Text style={styles.text} onPress={() => navigation.navigate("Zurück")}>DEUTSCHLAND</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('../assets/planet-earth.png')}
    style={[styles.image, {transform:[{rotate:"360deg"}]}]}>
    </Image>
    </TouchableOpacity>
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
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
  },
  image:{
    width: 250,
    height: 250,
    margin: 100,
  }
});



