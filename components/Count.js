import React from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList } from 'react-native';
import { RkTheme, RkButton } from 'react-native-ui-kitten';
import {  Icon, SearchBar } from 'react-native-elements';

const Count = (props) =>  {
    return (
      <View style={s.count}>
      <Text style={s.text} >You selected {props.results.length} ingredients!</Text>
      </View>
    );
}

export default Count

const s = StyleSheet.create({
  count: {
    backgroundColor: RkTheme.current.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 12,
    paddingVertical: 10,
    color:  RkTheme.current.colors.darkgrey,
  }

});