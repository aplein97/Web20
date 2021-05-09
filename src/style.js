const React = require("react-native");
import { Dimensions } from "react-native";

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
    //backgroundColor: '#'
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    // marginTop: 10,
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
