import { Appbar, Menu } from "react-native-paper";
import React from "react";
import { Alert } from "react-native";
import { ScreenStack } from "react-native-screens";

function CustomNavigationBar({ navigation, previous }) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  console.log(ScreenStack.name);

  return (
    <Appbar.Header style={{backgroundColor: '#ffffff', boxShadow: "none", marginTop: 7,}}>
      {previous & Appbar.name != 'Logout' ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Megafon" color="#272727" />
      {(
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          //showMenuIconButton={ScreenStack.name == 'Login'? false : true}
          anchor={
            <Appbar.Action icon="menu" color="#272727" onPress={openMenu} />
          }
        >
          <Menu.Item
            onPress={() => {
              navigation.navigate("Post");
              setVisible(false);
            }}
            title="Post verfassen"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("ManageAccounts");
              setVisible(false);
            }}
            title="Accounts verwalten"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Settings");
              setVisible(false);
            }}
            title="Einstellungen"
            //disabled
          />
          <Menu.Item
            onPress={() => {
              //hier Alert: bist du sicher? dann zu Login page
              setVisible(false);
              Alert.alert(
                "Logout",
                "Willst du dich wirklich abmelden?",
                [
                  {
                    text: "Ja",
                    onPress: () => {
                      navigation.navigate("Login");
                    },
                    style: "cancel",
                  },
                  {
                    text: "Nein",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                ],
                {
                  cancelable: true,
                }
              );
            }}
            title="Logout"
          />
        </Menu>
      )}
    </Appbar.Header>
  );
}
export default CustomNavigationBar;
