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
          style={{ height: 50, width: 50, opacity: isEnabled ? 1.0 : 0.4 }}
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
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => toggleSwitch(switchID)}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export default IconSwitch;
