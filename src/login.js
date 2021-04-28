import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

const LoginScreen= ({navigation}) => {

  this.state = {
    UserID: '',
    UserPassword: ''
  }
  return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>InterAccountBot</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
            onChangeText={UserID => this.setState({UserID})}/>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
            onChangeText={UserPassword => this.setState({UserPassword})}/>

            <Button
              buttonStyle={styles.loginButton}
              onPress={() => navigation.navigate('Home')}
              title="Login"
            />
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => navigation.navigate('Home')}
              title="Login with Facebook"
              color="#3897f1"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  

  /*componentDidMount() {
  },

  componentWillUnmount() {
  };*/

  /*onLoginPress= () =>{
 
    const { UserID, UserPassword }  = this.state ;
       if(UserID == "admin" && UserPassword == "admin"){
        const navigation = useNavigation();
        navigation.navigate('Home')
       }
       return Alert.alert('Login data not found, please try again.')
     }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }*/
};
export default LoginScreen;
