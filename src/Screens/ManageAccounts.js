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
import { Image } from "react-native";
//const appId = "1047121222092614"

const ManageAccountsScreen = ({ navigation }) => {
  const [hasOpacity, setHasOpacity] = React.useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Accounts verwalten</Text>
    </View>
  );
};
export default ManageAccountsScreen;