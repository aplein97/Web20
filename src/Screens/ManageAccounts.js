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


const ManageAccountsScreen = ({ navigation }) => {
  const [hasOpacity, setHasOpacity] = React.useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F7E2D2", paddingTop: 80,}}>
      <View style={styles.loginFormView}>
        <Button
          buttonStyle={styles.accountButton}
          onPress={() => navigation.navigate("AddSteemit")}
          title="Steemit-Account hinzufügen"
        />
        <Button
          buttonStyle={styles.accountButton}
          onPress={() => navigation.navigate("AddMastodon")}
          title="Mastodon-Account hinzufügen"
        />
      </View>
    </View>
  );
};
export default ManageAccountsScreen;
