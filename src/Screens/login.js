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
import { ScreenStack } from "react-native-screens";

import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import loginController from "../LoginController";

const LoginScreen = ({ navigation }) => {

  const [Mail, setMail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  // Empty input fields
  const resetForm = () => {
    setMail("");
    setPassword("");
  }

  const handleLoginSuccess = () => {
    resetForm();
    navigation.navigate("Post");
  }

  const prepareForm = () => {
    setMail(Mail);
    setPassword(Password);
  }

  // Render view
  return (
    <KeyboardAvoidingView style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text>
              <FlashMessage 
                position="top"
                icon="auto"
              />
            </Text>
            <Text style={styles.logoText}>Megafon Login</Text>
            <TextInput
              placeholder="E-Mail"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={(email) => setMail(email)}
              value={Mail}
            />
            <TextInput
              placeholder="Passwort"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={(pwd) => setPassword(pwd)}
              value={Password}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => {
                if(loginController.makeAPICall(Mail, Password)) {
                  handleLoginSuccess();
                } else {
                  prepareForm();
                }
              }}
              
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
