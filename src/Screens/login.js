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

//von Login zu ManageAccounts oder Home
export default class LoginScreen extends Component {
  state = {
		Mail: '',
		Password: '',
	};

  render () {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
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
                onChangeText={text =>
                  this.setState({ Mail: text })
                }
                value={this.state.Mail}
              />
              <TextInput
                placeholder="Passwort"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={text =>
                  this.setState({ Password: text })
                }
                value={this.state.Password}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={
                  () => this.makeAPICall()
                }
                title="Login"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  // Send data to API
  makeAPICall = () => {
		console.log("send data");

		let result = this.validateFields();
		if (result === true) {
      const user = {
        email: this.state.Mail,
        pwd: this.state.Password
      };

			const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
      }

      console.log(JSON.parse(JSON.stringify(user)));

      // Server IP: 185.176.41.137
      // Fetch mit Errorhandling
      fetch('<own_intern_IP>:3000/login', options)
        .then(res => {
          if (res.ok) {

              this._resetForm();
              /////////// TODO UserId speichern! /////////
              //this.props.navigation.navigate("Post");


              console.log('login worked');
              return res.json();
          } else {
              showMessage({
                message: "Login fehlgeschlagen!",
                description: "Bitte überprüfe den Input.",
                type: "danger",
                floating: "true",
              });
              return Promise.reject(res.status);
          }
        })
        .then(res => console.log(res))
        //.catch(err => console.log('Error with message: ${err}'));

    }
  }
	
  // Validate input fields
  validateFields() {
    let result = true;
    var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(this.state.Mail == '' || this.state.Password == '') {
      console.log('empty input fields');
      showMessage({
        message: "Bitte fülle alle Felder aus.",
        type: "danger",
        floating: "true",
      });
      result = false;
    } else {
      if (reMail.test(this.state.Mail) === false) {
        console.log('invalid email address');
        showMessage({
          message: "Keine gültige E-Mail-Adresse!",
          description: "Bitte überprüfe den Input.",
          type: "danger",
          floating: "true",
        });
        result = false;
      } 
    }

    return result;
  }

  // Empty input fields
  _resetForm() {
		this.setState({
			Mail: '',
			Password1: '',
			Password2: ''
		});
	}
}

//navigation.immediatelyResetStack(['Home'], 0);