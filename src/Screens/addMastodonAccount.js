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

const AddMastodonAccount = ({ navigation }) => {

  const [InstanceUrl, setInstanceUrl] = React.useState("");

  // Empty input fields
  const resetForm = () => {
    setInstanceUrl("");
  }

  const handleRegistrationSuccess = () => {
    resetForm();
    //navigation.navigate("ManageAccounts");
  }

  const prepareForm = () => {
    setInstanceUrl(InstanceUrl);
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
                if(accountController.makeMastodonCall(InstanceUrl, 'mastodon')) {
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

export default AddMastodonAccount;
