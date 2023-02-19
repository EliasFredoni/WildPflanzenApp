import { Button, TouchableOpacity, StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList } from 'react-native';

export default function Leaf() {
  return (
    <View style={styles.container}>
    <Text>BLATT</Text>
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
});