import { Appbar, Menu } from "react-native-paper";
import React from "react";


function CustomNavigationBar({ navigation, previous }) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Megaphone" />
      {!previous ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }
        >
          <Menu.Item
            onPress={() => {
              navigation.navigate("Post");
            }}
            title="Post verfassen"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("ManageAccounts");
            }}
            title="Accounts verwalten"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Settings");
            }}
            title="Einstellungen"
            disabled
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Post");
            }}
            title="Logout"
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}
export default CustomNavigationBar;
