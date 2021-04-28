
import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

const ImageChooser=()=> {
    state = {
      photo: null,
    }
  
    handleChoosePhoto = () => {
      const options = {
        noData: true,
      }
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
    }
  
      const { photo } = this.state
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {photo && (
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
          )}
          <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
        </View>
      )
  };
  export default ImageChooser;