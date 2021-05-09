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

//von createAccount zu Login
const CreateAccountScreen = ({ navigation }) => {
  const [UserID, setUserID] = React.useState();
  const [Mail, setMail] = React.useState();
  const [Password, setPassword] = React.useState(); 

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}>InterAccountBot</Text>
          <TextInput
            placeholder="Name"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={(UserID) => setUserID({ UserID })}
          />
          <TextInput
            placeholder="E-Mail"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={(Mail) => setMail({ Mail })}
          />
          <TextInput
            placeholder="Password"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            onChangeText={(UserPassword) => setPassword({ UserPassword })}
          />

          <Button
            buttonStyle={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
            title="Account erstellen"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
};
export default CreateAccountScreen;
