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

class AccountController {

    constructor() {
        this.mastodonAuthUrl = '';
        this.twitterAuthUrl = '';
    }
    
    // Send steemit data to API
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

                    // Server IP: https://185.176.41.137:3000/steem/register
                    if(network == 'steemit') {
                        return fetch('https://185.176.41.137:3000/steem/register', options)
                            .then(res => {
                                if (res.ok) {
                                    return res.json();
                                } else {
                                    return Promise.reject(res.status);
                                }
                            })
                            .catch(err => console.log('Error with message: ' + err));
                    }

                    return response;
                });

        } else {
            return false;
        }
    }

    // Send mastodon data to API
    makeMastodonCall = async (url) => {
        console.log("send mastodon instance url");
            
            loginController.checkUserStatus()
                .then(response => {

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
        
                    // Server IP: https://185.176.41.137:3000/mastodon/register
                    fetch('https://185.176.41.137:3000/mastodon/register', options)
                        .then(res => {
                            if (res.ok) {
                                return res.json();
                            } else {
                                return Promise.reject(res.status);
                            }
                        })
                        .then(
                            res => {
                                try {
                                    this.setAuthUrl(res['authUrl']);
                                } catch (error) {
                                    console.log('Url couldn\'t be set!', error);
                                }
                            }
                        )
                        .catch(
                            err => console.log('Error with message: ' + err)
                        );
                })
                .catch(err => console.log('Error with message: ' + err));

    }

    // Setter for Mastodon authentication url
    setAuthUrl(res) {
        this.mastodonAuthUrl = res;
    }

    // Getter for Mastodon authentication url
    getAuthUrl() {
        return this.mastodonAuthUrl;
    }


    // Sending mastodon authentication code for linking account
    sendAuthCode = async (code) => {

        loginController.checkUserStatus()
            .then(response => {

                const Code = {
                    authCode : code,
                };

                const options = {
                    method: 'POST',
                    body: JSON.stringify(Code),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + response,
                    }
                };

                // Server IP: https://185.176.41.137:3000/mastodon/register/auth
                fetch('https://185.176.41.137:3000/mastodon/register/auth', options)
                        .then(res => {
                            if (res.ok) {
                                return res.json();
                            } else {
                                return Promise.reject(res.status);
                            }
                        })
                        .catch(
                            err => console.log('Error with message: ' + err)
                        );
            })
            .catch(err => console.log('Error with message: ' + err));
    }




    //twitter functions


    // Setter for Twitter authentication url
    setTwitterAuthUrl(res) {
        this.twitterAuthUrl = res;
    }    

    // Getter for Twitter authentication url
    getTwitterAuthUrl() {
        return this.twitterAuthUrl;
    }


    makeTwitterCall = async () => {
        console.log("send twitter request for token");
            
            loginController.checkUserStatus()
                .then(response => {
                    console.log('Response: ' + response);

                    const account = {
                        token : response,
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

                    // Server IP: https://185.176.41.137:3000/twitter/register
                    fetch('http:///185.176.41.137:3000/twitter/register', options)
                        .then(res => {
                            if (res.ok) {
                                console.log('twitter request token granted');
                                return res.json();
                            } else {
                                return Promise.reject(res.status);
                            }
                        })
                        .then(
                            res => {
                                console.log(res);
                                try {
                                    this.setTwitterAuthUrl(res['authUrl']);
                                    console.log('URL SET');
                                    console.log(this.getTwitterAuthUrl());
                                } catch (error) {
                                    console.log('Url couldn\'t be set!', error);
                                }
                            }
                        )
                        .catch(
                            err => console.log('Error with message: ' + err)
                        );
                })
                .catch(err => console.log('Error with message: ' + err));

    }    
}




const accountController = new AccountController();
export default accountController;