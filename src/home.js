import React, { Component } from "react";
import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import {Image} from 'react-native' ; 
//const appId = "1047121222092614"

const HomeScreen =({navigation}) => {
  const [hasOpacity, setHasOpacity] = React.useState(false);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Post</Text>
          <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around', flexDirection:'row'}}>
          <TouchableOpacity style={{opacity: hasOpacity ? 1.0 : 0.5}} activeOpacity={1.0} onPress={() => setHasOpacity(!hasOpacity)}>
          <Image style={styles.iconify}
          source= {require('./images/instagram.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{opacity: hasOpacity ? 0.5 : 1.0}} activeOpacity={1.0} onPress={() => activeOpacity=1.0}>
          <Image style={styles.iconify}
          source= {require('./images/steemit.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{opacity: hasOpacity ? 0.5 : 1.0}} activeOpacity={1.0} onPress={() => activeOpacity=1.0}>
          <Image style={styles.iconify}
          source= {require('./images/twitter.png')}/>
          </TouchableOpacity>
          </View>
          <View >
            

          </View>

        </View>
      );
    
};
export default HomeScreen;