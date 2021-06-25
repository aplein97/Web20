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
import { TouchableOpacity } from "react-native";
import { Image, Switch } from "react-native";
import { useNavigation } from '@react-navigation/native';

import IconSwitch from "../iconSwitch";
import AdvertiseSwitch from "../advertiseSwitch";
import ImageChooser from "../ImageChooser";
import { ScrollView } from "react-native";
import postController from "../PostController";

const PostScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState({
    twitterSwitch: false,
    steemitSwitch: false,
    mastodonSwitch: false,
  });

  const [isAdvertising, setIsAdvertising] = React.useState({
    advertiseSwitch: false,
  });

  const toggleSwitch = (switchID) => {
    const newSwitchID = !isEnabled[switchID];
    const newStatus = { ...isEnabled, [switchID]: newSwitchID };
    setIsEnabled(newStatus);
  };

  const toggleAdvertisingSwitch = (switchID) => {
    const newAdSwitchID = !isAdvertising[switchID];
    const newAdStatus = { ...isAdvertising, [switchID]: newAdSwitchID };
    setIsAdvertising(newAdStatus);
  };

  const maxLength = 250;
  const [text, setText] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [hash, setHash] = React.useState("");
  const [postTitle, setTitle] = React.useState("");

  // Empty input fields
  const resetForm = () => {
    setText("");
    setUrl("");
    setHash("");
    setTitle("");
  }

  const handlePostSuccess = () => {
    resetForm();

    showMessage({
      message: "Post erfolgreich!",
      type: "success",
      floating: "true",
    });
  }

  const prepareForm = () => {
    setText(text);
    setUrl(url);
    setHash(hash);
    setTitle(postTitle);
  }

  return (
    <ScrollView style={{ backgroundColor: "#ffffff", }}>
      <View style={{ flexDirection: "column", padding: 28,}}>
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#272727", }}>
            Post verfassen
          </Text>
        </View>
        <View
          style={{
            marginBottom: 24,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <IconSwitch
              toggleSwitch={toggleSwitch}
              source={require("../images/twitter.png")}
              isEnabled={isEnabled.twitterSwitch}
              switchID="twitterSwitch"
            />
          </View>
          <View>
            <IconSwitch
              toggleSwitch={toggleSwitch}
              source={require("../images/steemit.png")}
              isEnabled={isEnabled.steemitSwitch}
              switchID="steemitSwitch"
            />
          </View>
          <View>
            <IconSwitch
              toggleSwitch={toggleSwitch}
              source={require("../images/mastodon.png")}
              isEnabled={isEnabled.mastodonSwitch}
              switchID="mastodonSwitch"
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 8,
            width: "100%",
            borderWidth: 0.5,
            borderRadius: 17,
            alignSelf: "center",
            borderColor: "#EDA83A",
          }}
        >
          <TextInput
            onChangeText={(title) => setTitle(title)}
            value={postTitle}
            maxLength={maxLength}
            placeholder="Post-Titel..."
            style={{paddingLeft: 20,}}
          />
        </View>
        <View
          style={{
            marginBottom: 8,
            width: "100%",
            borderWidth: 0.5,
            borderRadius: 17,
            alignSelf: "center",
            borderColor: "#F7E2D2",
          }}
        >
          <TextInput
              onChangeText={(url) => setUrl(url)}
              value={url}
              placeholder="Bild-URL..."
              style={{paddingLeft: 20,}}
            />
        </View>
        <View
          style={{
            marginBottom: 8,
            height: 100,
            width: "100%",
            borderWidth: 0.5,
            borderRadius: 17,
            alignSelf: "center",
            borderColor: "#F7E2D2",
          }}
        >
          <TextInput
            onChangeText={(text) => setText(text)}
            value={text}
            maxLength={maxLength}
            placeholder="Caption..."
            style={{paddingLeft: 20,}}
          />
        </View>
        <View style={{ marginBottom: 8, }}>
          <Text>{`${text.length} / ${maxLength}`}</Text>
        </View>
        <View style={{ marginBottom: 15, }}>
          <AdvertiseSwitch
            toggleSwitch={toggleAdvertisingSwitch}
            source={require("../images/megaphon.png")}
            isAdvertising={isAdvertising.advertiseSwitch}
            switchID="advertiseSwitch"
          />
        </View>
        <View style={{ flexDirection: "row", }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#272727", paddingRight: 10, marginTop: 4,}}>
            #
          </Text>
          <View
            style={{
              marginBottom: 32,
              width: "90%",
              borderWidth: 0.5,
              borderRadius: 17,
              alignSelf: "center",
              borderColor: "#F7E2D2",
            }}
          >
            <TextInput
                onChangeText={(hashtag) => setHash(hashtag)}
                value={hash}
                placeholder="hashtags mit leerzeichen trennen"
                style={{paddingLeft: 20,}}
              />
          </View>
        </View>
        <View>
          <Button
            title="Posten"
            buttonStyle={styles.postButton}
            onPress={() => {
              if(postController.makeAPICall(url, text, hash, postTitle, isEnabled, isAdvertising)) {
                handlePostSuccess();
              } else {
                prepareForm();
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
