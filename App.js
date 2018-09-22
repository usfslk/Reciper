/**
 * Youssef Selkani
 * https:/usfslk.github.io
 */

import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

export default class App extends React.Component {
	  constructor(props) {
  super(props)
  this.state = {
    loading: true,
  } 
}
  async componentWillMount() {
  await Expo.Font.loadAsync({
    regular: require("./assets/fonts/regular.otf"),
    bold: require("./assets/fonts/bold.otf"),
    light: require("./assets/fonts/light.otf"),
  });
  this.setState({ loading: false });
 }
   render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
         <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const customTextProps = {
  style: {
    fontFamily: 'regular',
  }
};

setCustomText(customTextProps);
