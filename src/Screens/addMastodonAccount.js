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
import Hyperlink from 'react-native-hyperlink'
import { acc } from "react-native-reanimated";

const AddMastodonAccount = ({ navigation }) => {

  const [InstanceUrl, setInstanceUrl] = React.useState("");
  const [AuthCode, setAuthCode] = React.useState("");
  const [showUrl, setShowUrl] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);

  // Empty input fields
  const resetForm = () => {
    setInstanceUrl("");
  }

  const handleRegistrationSuccess = () => {
    resetForm();
    setShowUrl(true);
    setShowInput(true);
  }

  const prepareForm = () => {
    setInstanceUrl(InstanceUrl);
  }

  // Render view for authentication link
  const renderUrl = () => {
    if(showUrl == true) {
      return (
        <Hyperlink linkDefault={ true }>
          <Text style={ { fontSize: 15 } }>
            Hier Account bestätigen: {accountController.getAuthUrl()}
          </Text>
        </Hyperlink>
      );
    } else {
      return null;
    }
  }

  // Render view for input of authentication code to paste in
  const renderCodeInput = () => {
    if(showInput == true) {
      return (
        <>
        <TextInput
          placeholder="Authentifizierungscode eingeben"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          onChangeText={(code) => setAuthCode(code)}
          value={AuthCode}
        />
        <Button
              buttonStyle={styles.loginButton}
              onPress={() => {
                  accountController.sendAuthCode(AuthCode), navigation.navigate("Post");
              }}
              title="Code abschicken"
        />
        </>
      );
    } else {
      return null;
    }
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
            <Text style={styles.logoText}>Mastodon-Account hinterlegen</Text>
            <TextInput
              placeholder="Instanz-URL (z.B. botsin.space ...)"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={(url) => setInstanceUrl(url)}
              value={InstanceUrl}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => {
                if (accountController.makeMastodonCall(InstanceUrl)) {
                  handleRegistrationSuccess();
                } else {
                  prepareForm();
                }
              }}
              title="Account hinzufügen"
            />
            <View style={styles.authUrl}>
              { renderUrl() }
            </View>
            <View style={styles.loginFormView}>
              { renderCodeInput() }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default AddMastodonAccount;
