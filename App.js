/**
 * Youssef Selkani
 * https:/usfslk.github.io
 */

import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
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
