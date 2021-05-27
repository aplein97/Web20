import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../src/style";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const ImageChooser = () => {
  const [image, setImage] = React.useState(null);

  /* const useEffect(=() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);*/
  
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
    }
  }

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
    }
  }

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 15 }}>
        <Button 
          title="Foto hochladen"
          onPress={showImagePicker}
          buttonStyle={styles.cameraButton}
        />
        <Button 
          title="Foto aufnehmen"
          onPress={openCamera}
          buttonStyle={styles.cameraButton}
        />
      </View>
      {image ? (
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>
      ) : (
        <View
          style={{ backgroundColor: "white", borderColor: "#E0E0E0", borderWidth: 0.5, width: 200, height: 200, borderRadius: 17, }}
        ></View>
      )}
    </View>
  );
};
export default ImageChooser;
