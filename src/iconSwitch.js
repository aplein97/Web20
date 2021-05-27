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

const IconSwitch = ({ source, isEnabled, toggleSwitch, switchID }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image
          style={{ height: 40, width: 40, resizeMode: "contain", marginLeft: 20, opacity: isEnabled ? 1.0 : 0.2 }}
          source={source}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Switch
          trackColor={{ false: "#E0E0E0", true: "#EDA83A" }}
          thumbColor={isEnabled ? "#fff" : "#fff"}
          onValueChange={() => toggleSwitch(switchID)}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export default IconSwitch;
