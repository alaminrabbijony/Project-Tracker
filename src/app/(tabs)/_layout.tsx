import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@shopify/restyle';
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";


export default function TabsLayout() {
  const theme = useTheme()
  return (
    <Tabs screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: theme.colors.navBg,
        borderBottomColor: theme.colors.navBodyBorder,
      },
      headerTintColor: theme.colors.headerTint,
      tabBarStyle: {
        backgroundColor: theme.colors.navBg,
        borderTopColor: theme.colors.navBodyBorder
      },
      tabBarActiveTintColor: theme.colors.iconTintActiveColor,
      tabBarInactiveTintColor:theme.colors.iconColor

    }}>
      <Tabs.Screen name="index" options={{title: 'Home',
         tabBarIcon: ({color}) => (
          <Ionicons name="home" size={24} color={color} />
         )
      }}/>
      <Tabs.Screen name="Add" options={{title: 'Add',
         
         tabBarIcon: ({color}) => (
          <FontAwesome6 name="add" size={24} color={color} />
         )
      }} />
      <Tabs.Screen name="Fin" options={{
        title: 'Fin', 
        tabBarIcon: ({color}) => (
          <MaterialIcons name="download-done" size={24} color={color} />
         )
      }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
