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

class PostController {
    
    // Send data to API
    makeAPICall(url, text, hash, postTitle, isEnabled, isAdvertising) {
        console.log("send post data");

        let result = true;
        if (result === true) {
            
            loginController.checkUserStatus()
                .then(response => {

                    let advertising;
                    if(isAdvertising['advertiseSwitch'] == true) {
                        advertising = true;
                    } else {
                        advertising = false;
                    }

                    if(isEnabled['steemitSwitch'] == true) {
                        const post = {
                            title : postTitle,
                            imgUrl : url,
                            message : text,
                            tags : hash.split(' '),
                            //advertise : advertising,
                        };
            
                        const options = {
                            method: 'POST',
                            body: JSON.stringify(post),
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + response
                            }
                        };
                      
                        // Server IP: https://185.176.41.137:3000/steem/post
                        fetch('http://185.176.41.137:3000/steem/post', options)
                            .then(res => {
                                if (res.ok) {
                                    return res.json();
                                } else {
                                    return Promise.reject(res.status);
                                }
                            })
                            .catch(err => console.log('Error with message:  ' + err));
                    }

                    if(isEnabled['mastodonSwitch'] == true) {
                        const post = {
                            //title : postTitle,
                            //imgUrl : '',
                            message : text,
                            //tags : hash.split(' '),
                            //advertise : advertising,
                        };
            
                        const options = {
                            method: 'POST',
                            body: JSON.stringify(post),
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + response
                            }
                        };

                        fetch('http://185.176.41.137:3000/mastodon/post', options)
                            .then(res => {
                                if (res.ok) {
                                    console.log('mastodon posting worked');
                                    
                                    return res.json();
                                } else {
                                    return Promise.reject(res.status);
                                }
                            })
                            .catch(err => console.log('Error with message:  ' + err));

                    }

                    if(isEnabled['twitterSwitch'] == true) {
                        const post = {
                            //title : postTitle,
                            //imgUrl : '',
                            message : text,
                            //tags : hash.split(' '),
                            //advertise : advertising,
                        };
            
                        const options = {
                            method: 'POST',
                            body: JSON.stringify(post),
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + response
                            }
                        };

                        fetch('http://185.176.41.137:3000/twitter/post', options)
                            .then(res => {
                                if (res.ok) {
                                    return res.json();
                                } else {
                                    return Promise.reject(res.status);
                                }
                            })
                            .catch(err => console.log('Error with message:  ' + err));
                    }

                    return response;
                });

        } else {
            return false;
        }
    }
}

const postController = new PostController();
export default postController;