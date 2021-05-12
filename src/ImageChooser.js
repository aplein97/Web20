import React from "react";
import { View, Text, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 8 }}>
        <Button title="Foto hochladen" onPress={pickImage} />
      </View>
      {image ? (
        <View>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        </View>
      ) : (
        <View
          style={{ backgroundColor: "lightgrey", width: 200, height: 200 }}
        ></View>
      )}
    </View>
  );
};
export default ImageChooser;
