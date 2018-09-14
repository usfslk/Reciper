import React from 'react';
import {StyleSheet, Text, View, Keyboard, Dimensions, Image, WebView } from 'react-native';
import { RkTheme } from 'react-native-ui-kitten';
import {  Icon } from 'react-native-elements';

export default class WebViewContainer extends React.Component {

  render() {
    return (
      <WebView
        source={{uri: 'google.com' }}
      />

    );
  }
}

const s = StyleSheet.create({


});