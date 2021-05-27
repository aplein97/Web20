const React = require("react-native");
import { Dimensions } from "react-native";

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor: '#F7E2D2',
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#fafafa",
    paddingLeft: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#EDA83A",
    borderRadius: 17,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  cameraButton: {
    backgroundColor: "#EDA83A",
    borderRadius: 17,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  /* iconify: {
    height: 55,
    width: 55,
    marginLeft: 10,
    marginRight: 10,
  }, 
  input: {
    height: 200,
    width: 200,
    margin: 12,
    borderWidth: 1,
  },*/
};
