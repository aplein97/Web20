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
import loginController from "./LoginController";

const url = '';

class AccountController {
    
    // Send data to API
    makeAPICall(user, password, network) {
        console.log("send steemit account data");
        
        let result = true;
        if (result === true) {
            
            loginController.checkUserStatus()
                .then(response => {
                    const account = {
                        username : user,
                        secret : password,
                    };
        
                    const options = {
                        method: 'POST',
                        body: JSON.stringify(account),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + response,
                        }
                    };
        
                    console.log(JSON.parse(JSON.stringify(account)));

                    // Server IP: https://185.176.41.137:3000/steemit/post
                    if(network == 'steemit') {
                        return fetch('http://<internal-IP>:3000/steem/register', options)
                            .then(res => {
                                if (res.ok) {
                                    console.log('steemit account added');
                                    
                                    return res.json();
                                } else {
                                    return Promise.reject(res.status);
                                }
                            })
                            .then(res => console.log(res))
                            .catch(err => console.log('Error with message: ' + err));
                    }

                    return response;
                });

        } else {
            return false;
        }
    }

    // Send data to API
    makeMastodonCall(url, network) {
        console.log("send mastodon instance url");
        let result = true;
        if (result === true) {
            
            loginController.checkUserStatus()
                .then(response => {
                    console.log('Response: ' + response);

                    const account = {
                        token : response,
                        instanceUrl : url,
                    };
        
                    const options = {
                        method: 'POST',
                        body: JSON.stringify(account),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + response,
                        }
                    };
        
                    console.log(JSON.parse(JSON.stringify(account)));

                    fetch('http://<internal_IP>:3000/mastodon/register', options)
                        .then(res => {
                            if (res.ok) {
                                console.log('mastodon registration step 1 worked');
                                return res.json();
                            } else {
                                return Promise.reject(res.status);
                            }
                        })
                        .then(
                            res => {
                                console.log(res);
                                try {
                                    this.setAuthUrl(res['authUrl']);
                                } catch (error) {
                                    console.log('Url couldn\'t be set!', error);
                                }
                            }
                        )
                        .catch(err => console.log('Error with message: ' + err));
                })
                .catch(err => console.log('Error with message: ' + err));

        } else {
            return false;
        }
    }

    setAuthUrl = async(Url) => {

            const url = Url;
            // Get authentication url
            if(url) {
                return url;
            }

        /* catch (error) {
          console.log('No authentication url found!', error);
        } */
    }

    getAuthUrl = async () => {
        this.setAuthUrl()
            .then(() => {
            console.log('working ' + url);
            return url;
            })
    }
}

const accountController = new AccountController();
export default accountController;