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
import { useNavigation } from '@react-navigation/native';

import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import accountController from "../AccountController";

const AddSteemitAccount = ({ navigation }) => {

  const [Username, setUsername] = React.useState("");
  const [Password, setPassword] = React.useState("");

  // Empty input fields
  const resetForm = () => {
    setUsername("");
    setPassword("");
  }

  const handleRegistrationSuccess = () => {
    resetForm();
    navigation.navigate("ManageAccounts");
  }

  const prepareForm = () => {
    setUsername(Username);
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
            <Text style={styles.logoText}>Steemit-Account hinterlegen</Text>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={(username) => setUsername(username)}
              value={Username}
            />
            <TextInput
              placeholder="Master-Passwort"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={(pwd) => setPassword(pwd)}
              value={Password}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => {
                if(accountController.makeAPICall(Username, Password, 'steemit')) {
                  handleRegistrationSuccess();
                } else {
                  prepareForm();
                }
              }}
              title="Account hinzufügen"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default AddSteemitAccount;
