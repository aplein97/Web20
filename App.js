import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./src/style";
import LoginScreen from './src/login'
import HomeScreen from './src/home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

    return (
      <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          //options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  };
export default App;

