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
import registrationController from "../RegistrationController";

const createAccount = ({ navigation }) => {

  const [Mail, setMail] = React.useState("");
  const [Password1, setPassword1] = React.useState("");
  const [Password2, setPassword2] = React.useState("");

  // Empty input fields
  const resetForm = () => {
    setMail("");
    setPassword1("");
    setPassword2("");
  }

  const handleRegistrationSuccess = () => {
    resetForm();
    navigation.navigate("Login");
  }

  const prepareForm = () => {
    setMail(Mail);
    setPassword1(Password1);
    setPassword2(Password2);
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
            <Text style={styles.logoText}>Neuen Megafon-Account erstellen</Text>
            <TextInput
              placeholder="E-Mail"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={(email) => setMail(email)}
              value={Mail}
            />
            <TextInput
              placeholder="Passwort eingeben"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={(pwd1) => setPassword1(pwd1)}
              value={Password1}
            />
            <TextInput
              placeholder="Passwort bestätigen"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={(pwd2) => setPassword2(pwd2)}
              value={Password2}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => {
                if(registrationController.makeAPICall(Mail, Password1, Password2)) {
                  handleRegistrationSuccess();
                } else {
                  prepareForm();
                }
              }}
              title="Account erstellen"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default createAccount;
