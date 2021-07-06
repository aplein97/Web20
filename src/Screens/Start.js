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

const StartScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F7E2D2", }}>
      <Image
            style={{ height: 230, width: 230, resizeMode: "contain", opacity: 1.0, marginBottom: 50, marginTop: 50,}}
            source={require("../images/logoApp.png")}
      />
      <View style={styles.loginFormView}>
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
    </View>
  );
};
export default StartScreen;
