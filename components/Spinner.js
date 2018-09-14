import React from 'react';
import {StyleSheet, Text, View, Keyboard, Dimensions, Image  } from 'react-native';
import { RkTheme } from 'react-native-ui-kitten';
import {  Icon } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Spinner extends React.Component {

  render() {
    return (
      <View style={s.loading} ><Image 
      source={require('../assets/loading.gif')}
      /></View>
    );
  }
}

const s = StyleSheet.create({
  loading: {
    alignItems: 'center',
    height: height,
    paddingTop: 100,
    backgroundColor: '#fff'
  },

});