import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import styles from "./src/style";

import StartScreen from "./src/Start";
import LoginScreen from "./src/login";
import PostScreen from "./src/post";
import CreateAccountScreen from "./src/createAccount";
import ManageAccountsScreen from "./src/ManageAccounts";
import Settings from "./src/settings";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomNavigationBar from "./src/CustomNavigationBar";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="Post"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen
            // unser 1. Screen mit Logo und Login oder erstelle Account
            name="Start"
            component={StartScreen}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            //erstelle Account
            name="CreateAccount"
            component={CreateAccountScreen}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            //Login mit admin/password
            name="Login"
            component={LoginScreen}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Post"
            component={PostScreen}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="ManageAccounts"
            component={ManageAccountsScreen}
            //options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            //options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
