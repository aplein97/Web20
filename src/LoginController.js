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
import { useNavigation } from '@react-navigation/native';

import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import * as Keychain from 'react-native-keychain';

class LoginController {

    // Send data to API
    makeAPICall(mail, password) {

        let result = this.validateFields(mail, password);
        if (result === true) {
            const user = {
                email: mail,
                pwd: password
            };

            const options = {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            return fetch('http:/185.176.41.137:3000/login', options)
                .then(res => {
                    if (res.ok) {
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
                .then(
                    res => {
                        try {
                            this.setUserToken(res['token']);
                        } catch (error) {
                            console.log('Key couldn\'t be set!', error);
                        }
                    }
                )
                .catch(err => console.log('Error with message: ' + err));

        } else {
            return false;
        }
    }

    // Validate input fields
    validateFields(mail, password) {
        let result = true;
        var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(mail == '' || password == '') {
            showMessage({
                message: "Bitte fülle alle Felder aus.",
                type: "danger",
                floating: "true",
            });
            result = false;
        } else {
            if (reMail.test(mail) === false) {
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

    checkUserStatus = async () => {
        try {
        // Get credentials
        const credentials = await Keychain.getGenericPassword()

            if(credentials) {
                return credentials.password;
            }
        }
        catch (error) {
          console.log('Keychain couldn\'t be accessed!', error);
        }
    }

    setUserToken = async(res) => {
        const key = 'token';
        const password = res;
      
        // Store the credentials
        await Keychain.setGenericPassword(key, password);

        this.checkUserStatus();
    }
}

const loginController = new LoginController();
export default loginController;