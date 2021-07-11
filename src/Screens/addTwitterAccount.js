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
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import accountController from "../AccountController";
import Hyperlink from 'react-native-hyperlink'
import { acc } from "react-native-reanimated";
import { render } from "react-dom";

const AddTwitterAccount = ({ navigation }) => {

  const [showUrl, setShowUrl] = React.useState(false);
  const [showfailRequest, setShowfailedRequest] = React.useState(false);

  const handleRegistrationSuccess = () => {
    setShowUrl(true);
  }

  const handlefailedRequest = () => {
      setShowfailRequest(true);
  }



    // Render view for authentication link
  const renderUrl = () => {
    if(showUrl == true) {
      return (
        <Hyperlink linkDefault={ true }>
          <Text style={ { fontSize: 15 } }>
            Hier Account bestätigen: {accountController.getTwitterAuthUrl()}
          </Text>
        </Hyperlink>
      );
    } else {
      return null;
    }
  }

      // Render view for authentication link
    const renderFailedRequest = () => {
      if(setShowfailedRequest == true) {
        return (
            
          <Text style={ { fontSize: 15 } }>
            Try again!
          </Text>
            
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
            <Text style={styles.logoText}>Twitter-Account hinterlegen</Text>
            <TouchableOpacity
                onPress={() => {
                    //accountController.makeTwitterCall();
                    if (accountController.makeTwitterCall()) {
                        handleRegistrationSuccess();
                      } else {
                        handlefailedRequest();
                      }
                }}
            >
                <Image source={require("../images/sign_in_twitter.png")}/>
            </TouchableOpacity>
            <View style={styles.authUrl}>
              { renderUrl() }
            </View>
            <View>
              { renderFailedRequest()}
            </View>    
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default AddTwitterAccount;
