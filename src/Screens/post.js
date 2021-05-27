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

import IconSwitch from "../iconSwitch";
import ImageChooser from "../ImageChooser";
import { ScrollView } from "react-native";
//const appId = "1047121222092614"

const PostScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState({
    switch1: false,
    switch2: false,
    switch3: false,
  });

  const toggleSwitch = (switchID) => {
    const newSwitchID = !isEnabled[switchID];
    const newStatus = { ...isEnabled, [switchID]: newSwitchID };
    setIsEnabled(newStatus);
  };

  const maxLength = 250;
  const [text, setText] = React.useState("");
  //const [currentLength, setCurrentLength] = React.useState(0);
  //const [textLength, setTextLength] = maxLength - currentLength ;
  // const [value, onChangeText] = React.useState();
  return (
    <ScrollView style={{ backgroundColor: "#ffffff", }}>
      <View style={{ flexDirection: "column", padding: 28,}}>
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#272727", }}>
            Post verfassen
          </Text>
        </View>
        <View style={{ marginBottom: 48 }}>
          <ImageChooser />
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
              isEnabled={isEnabled.switch1}
              switchID="switch1"
            />
          </View>
          <View>
            <IconSwitch
              toggleSwitch={toggleSwitch}
              source={require("../images/steemit.png")}
              isEnabled={isEnabled.switch2}
              switchID="switch2"
            />
          </View>
          <View>
            <IconSwitch
              toggleSwitch={toggleSwitch}
              source={require("../images/mastodon.png")}
              isEnabled={isEnabled.switch3}
              switchID="switch3"
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 8,
            height: 100,
            width: "100%",
            borderWidth: 0.5,
            borderRadius: 17,
            padding: 4,
            alignSelf: "center",
            borderColor: "#F7E2D2",
          }}
        >
          <TextInput
            onChangeText={(text) => setText(text)}
            value={text}
            maxLength={maxLength}
            placeholder="Caption eingeben..."
            style={{paddingLeft: 20,}}
          />
        </View>
        <View style={{ marginBottom: 32 }}>
          <Text>{`${text.length} / ${maxLength}`}</Text>
        </View>
        <View>
          <Button
            title="Posten"
            buttonStyle={styles.loginButton}
            onPress={() => {
              console.log("Bild posten");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
