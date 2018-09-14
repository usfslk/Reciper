import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import { RkButton, RkCard, 
        RkTheme,
        RkText,
        } from 'react-native-ui-kitten';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import ImageLoad from 'react-native-image-placeholder';

import Navbar from '../components/Navbar';
import Results from '../components/Results';

export default class Browser extends Component {
static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={{ flex: 1}}>
      <Navbar title="Browser" function="Close" type="white" handle={() => this.login()} />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foreground: {
    height: 300, flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  mainheader: {
    fontWeight: 'bold',
    color: '#fff'
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingLeft: 15,
    color: '#fff'
  },
});