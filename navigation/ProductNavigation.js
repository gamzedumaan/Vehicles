import { AntDesign, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import MapScreen from '../screens/MapScreen';
import SavedScreen from '../screens/SavedScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeStcak() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="initial"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Info"
        component={InfoScreen}
      />
    </Stack.Navigator>
  );
}
export default function ProductNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="home" size={24} color={focused ? '#fff' : 'gray'} />;
          },
        }}
        name="Home"
        component={HomeStcak}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Feather name="map-pin" size={24} color={focused ? '#fff' : 'gray'} />;
          },
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="save" size={24} color={focused ? '#fff' : 'grey'} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <AntDesign name="setting" size={24} color={focused ? '#fff' : 'grey'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footerIcon: {
    width: 25,
  },
});
