import React, { Component } from 'react';
import { AppRegistry, ListView, StyleSheet, View, TouchableOpacity, Alert, StatusBar } from 'react-native';
import Navbar from '../components/Navbar';
import { RkTheme} from 'react-native-ui-kitten';
import {Text, SearchBar} from 'react-native-elements';
class FavScreen extends Component {
static navigationOptions = { header: null };

login() {
  Alert.alert(
  'Auth',
  'Coming soon',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: true }
)
}

  render() {
    return (

      <View style={s.container} >
      <StatusBar
      translucent
      backgroundColor="rgba(0, 0, 0, 0.20)"
      animated
      />
      <Navbar title="Favorites." function="Login" type="white" handle={() => this.login()} />
      <SearchBar
        containerStyle={{ backgroundColor: '#fff',borderBottomWidth: 0,
        borderTopWidth: 0, marginHorizontal: 0}}
        inputStyle={{ backgroundColor: 'transparent'}}
        searchIcon={{ size: 24 }}
        placeholder='Looking for something specific?'
      />
      <Text h5 style={s.text} >
        Under Maintenance
      </Text>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
      flex: 1,
   },
   text: {
     paddingVertical: 50,
     textAlign: 'center',
     color: '#222',
     fontWeight: '400',
   }
})

export default FavScreen;
