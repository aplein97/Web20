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

class RegistrationController {

    // Send data to API
    makeAPICall(mail, password1, password2) {
        console.log("send data");
        let result = this.validateFields(mail, password1, password2);
        if (result === true) {
            const user = {
                email: mail,
                pwd: password1
            };

            const options = {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            console.log(JSON.parse(JSON.stringify(user)));

            // Server IP: https://185.176.41.137:3000/register
            // Fetch mit Errorhandling
            return fetch('http://<own_intern_IP>:3000/register', options)
                .then(res => {
                    if (res.ok) {
                        showMessage({
                            message: "Registrierung erfolgreich.",
                            type: "success",
                            floating: "true",
                        });

                        console.log('registration worked');
                        
                        return res.json();
                    } else {
                        return Promise.reject(res.status);
                    }
                })
                .then(res => console.log(res))
                //.catch(err => console.log('Error with message: ${err}'));

        } else {
            return false;
        }
    }

    // Validate input fields
    validateFields(mail, password1, password2) {
        let result = true;
        var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(mail == '' || password1 == '' || password2 == '') {
            console.log('empty input fields');
            showMessage({
                message: "Bitte fülle alle Felder aus.",
                type: "danger",
                floating: "true",
            });
            result = false;
        } else {
            if (reMail.test(mail) === false) {
                console.log('invalid email address');
                showMessage({
                    message: "Keine gültige E-Mail-Adresse!",
                    description: "Bitte überprüfe den Input.",
                    type: "danger",
                    floating: "true",
                });
                result = false;
            } else {
                if(password1 != password2) {
                    console.log('passwords not matching');
                    showMessage({
                        message: "Die Passwörter stimmen nicht überein.",
                        description: "Bitte prüfe deine Eingaben.",
                        type: "danger",
                        floating: "true",
                    });
                    result = false;
                }
            }
        }
        return result;
    }
}

const registrationController = new RegistrationController();
export default registrationController;