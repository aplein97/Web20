import React, { Component } from "react";
import styles from "./style";
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

const CreateAccountScreen = ({ navigation }) => {
  const [hasOpacity, setHasOpacity] = React.useState(false);
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
            onChangeText={(UserID) => this.setState({ UserID })}
          />
          <TextInput
            placeholder="E-Mail"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={(Mail) => this.setState({ Mail })}
          />
          <TextInput
            placeholder="Password"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            onChangeText={(UserPassword) => this.setState({ UserPassword })}
          />

          <Button
            buttonStyle={styles.loginButton}
            onPress={() => navigation.navigate("Post")}
            title="Account erstellen"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
};
export default CreateAccountScreen;
