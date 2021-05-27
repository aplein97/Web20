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
import { ScrollView } from "react-native";

//const appId = "1047121222092614"

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff", }}>
      <View style={{ flexDirection: "column", padding: 28, }}>
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#272727", }}>
            Einstellungen
          </Text>
          <View
          style={{
            marginBottom: 24,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ fontSize: 18, color: "#272727", paddingTop: 25, }}>
            E-Mail-Adresse bearbeiten
          </Text>
          <Text style={{ fontSize: 18, color: "#272727", paddingTop: 25, }}>
            Passwort ändern
          </Text>
          <Text style={{ fontSize: 18, color: "#272727", paddingTop: 25, }}>
            Benachrichtigungen
          </Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Settings;
