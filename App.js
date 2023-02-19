import React from 'react'
import HomeScreen from './components/HomeScreen';
import Leaf from './components/Leaf'
import Blossom from './components/Blossom';
import Tribe from './components/Tribe';
import Bud from './components/Bud';
import Cure from './components/Cure';
import Name from './components/Name';
import Note from './components/Note';
import Search from './components/Search';
import SearchForDetails from './components/SearchForDetails';
import Steckbrief from './components/Steckbrief';
import Zubereitung from './components/Zubereitung';
import Verwendung from './components/Verwendung';
import SecoundScreen from './components/SecoundScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: "Wildkräuter"}}
        />
        <Stack.Screen
          name='Zurück'
          component={SecoundScreen}
        />
        <Stack.Screen
          name='Blatt'
          component={Leaf}
        />
        <Stack.Screen
          name='Blüte'
          component={Blossom}
        />
        <Stack.Screen
          name='Stamm'
          component={Tribe}
        />
        <Stack.Screen
          name='Knospe'
          component={Bud}
        />
        <Stack.Screen
          name='Heilung'
          component={Cure}
        />
        <Stack.Screen
          name='Notiz'
          component={Note}
        />
        <Stack.Screen
          name='Plants'
          component={Name}
        />
        <Stack.Screen
          name='Steckbrief'
          component={Steckbrief}
        />
        <Stack.Screen
          name='Suche'
          component={Search}
        />
        <Stack.Screen
          name="Details"
          component={SearchForDetails}
        />
        <Stack.Screen
          name="Verwendung"
          component={Verwendung}
          options={{title: "Zurück"}}
        />
        <Stack.Screen
          name="Zubereitung"
          component={Zubereitung}
          options={{title: "Zurück"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
};

