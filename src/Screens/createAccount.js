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

import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";

export default class createAccount extends Component {

  state = {
		UserName: "",
		Mail: "",
		Password1: "",
		Password2: ""
	};

  // Render view
  render() {
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
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={text =>
                  this.setState({ UserName: text })
                }
                value={this.state.UserName}
              />
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
                placeholder="Passwort eingeben"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={text =>
                  this.setState({ Password1: text })
                }
                value={this.state.Password1}
              />
              <TextInput
                placeholder="Passwort bestätigen"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={text =>
                  this.setState({ Password2: text })
                }
                value={this.state.Password2}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.makeAPICall()}
                title="Account erstellen"
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
        username: this.state.UserName,
        email: this.state.Mail,
        pwd: this.state.Password1
      };

			const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
      }

      console.log(options);

      // Fetch ohne Errorhandling
      /* fetch('185.176.41.137:3000/register', options)
        .then(res => res.json())
        .then(res => console.log(res)); */

      // Fetch mit Errorhandling
      /* fetch('185.176.41.137:3000/register', options)
        .then(res => {
          if (res.ok) {
              showMessage({
                message: "Registrierung erfolgreich.",
                type: "success",
                floating: "true",
              });

              this._resetForm();

              return res.json();
          } else {
              return Promise.reject(res.status);
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log('Error with message: ${err}')); */

    }
  }
	
  // Validate input fields
  validateFields() {
    let result = true;
    var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(this.state.UserName == '' || this.state.Mail == '' || this.state.Password1 == '' || this.state.Password2 == '') {
      result = false;
      console.log('empty input fields');
      showMessage({
        message: "Bitte fülle alle Felder aus.",
        type: "danger",
        floating: "true",
      });
    } else {
      if (reMail.test(this.state.Mail) === false) {
        result = false;
        console.log('invalid email address');
        showMessage({
          message: "Keine valide E-Mail-Adresse!",
          description: "Bitte überprüfe den Input.",
          type: "danger",
          floating: "true",
        });
      } else {
        if(this.state.Password1 != this.state.Password2) {
          result = false;
          console.log('passwords not matching');
          showMessage({
            message: "Die Passwörter stimmen nicht überein.",
            description: "Bitte prüfe deine Eingaben.",
            type: "danger",
            floating: "true",
          });
        }
      }
    }
    return result;
  }

  // Empty input fields
  _resetForm() {
		this.setState({
			UserName: "",
			Mail: "",
			Password1: "",
			Password2: ""
		});
	}
}


//navigation.navigate("Login")
