import Mastodon from "mastodon-api";
import React, { Component, useState } from "react";

import styles from "../style";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import { Button } from "react-native-elements";

//const Mastodon = require('mastodon-api')

const LinkMastodonScreen = ({ navigation }) => {
  const [Instance, setInstance] = useState("")
  const [AccessToken, setAccessToken] = useState("")
  return(
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <View style={styles.loginFormView}>
        <Text style={styles.logoText}>Link with Mastodon</Text>
        <TextInput
          placeholder="Mastodon instance e.g. botsin.space"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          onChangeText={(Instance) => {
            setInstance(Instance)
            //console.log(instance)
          }}
        />
        <Button
          buttonStyle={styles.loginButton}
          onPress={() => {
            Mastodon.createOAuthApp(`https://${Instance}/api/v1/apps`)
            .catch((err) => console.error(err))
            .then((res) => {
              console.log(res);

              let clientId = res.client_id
              let clientSecret = res.client_secret

              return Mastodon.getAuthorizationUrl(
                clientId, clientSecret, `https://${Instance}`)
            })
            .then((url) => {
              //console.log("Authorization Url");
              //console.log(url);

              Linking.openURL(url);
            })
          }}
          title="Link!"
          />
      </View>
    </KeyboardAvoidingView>
  );
};
export default LinkMastodonScreen;
