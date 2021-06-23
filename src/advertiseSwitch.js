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
import { TouchableOpacity } from "react-native";
import { Image, Switch } from "react-native";
//import { Tooltip } from 'react-native-elements';
import Tooltip from 'rn-tooltip';

const AdvertiseSwitch = ({ source, isAdvertising, toggleSwitch, switchID }) => {
  return (
    <View style={{ flexDirection: "row-reverse", }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Switch
          trackColor={{ false: "#E0E0E0", true: "#EDA83A" }}
          thumbColor={isAdvertising ? "#fff" : "#fff"}
          onValueChange={() => toggleSwitch(switchID)}
          value={isAdvertising}
        />
      </View>
      <View>
        <Tooltip 
          popover={<Text>Twitterpost bewerben?</Text>}
          backgroundColor={"#F7E2D2"}
          skipAndroidStatusBar={true}
          height="auto"
        >
          <Image
            style={{ height: 40, width: 40, resizeMode: "contain", opacity: isAdvertising ? 1.0 : 0.2 }}
            source={source}
          />
        </Tooltip>
      </View>
    </View>
  );
};
export default AdvertiseSwitch;
