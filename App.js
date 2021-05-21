import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import styles from "./src/style";

import StartScreen from "./src/Screens/Start";
import LoginScreen from "./src/Screens/login";
import PostScreen from "./src/Screens/post";
import CreateAccountScreen from "./src/Screens/createAccount";
import ManageAccountsScreen from "./src/Screens/ManageAccounts";
import Settings from "./src/Screens/settings";
import HomeScreen from "./src/Screens/Home";
import LinkMastodonScreen from "./src/mastodon/LinkMastodon";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomNavigationBar from "./src/CustomNavigationBar";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="Start"
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
            name="Home"
            component={HomeScreen}
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
          <Stack.Screen
            name="LinkMastodon"
            component={LinkMastodonScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
