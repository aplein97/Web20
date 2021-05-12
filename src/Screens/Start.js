import React, { Component } from "react";
import styles from "../style";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
//Vom StartScreen zu Login oder CreateAccount

const StartScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
        title="Login"
      />
      <Button
        buttonStyle={styles.loginButton}
        onPress={() => navigation.navigate("CreateAccount")}
        title="Erstelle einen Account"
      />
    </View>
  );
};
export default StartScreen;
