import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { RkTheme } from 'react-native-ui-kitten';

const renderList = (label, style) => {
  return (
		<View style={{ backgroundColor: RkTheme.current.colors.yellow }}>
		<ScrollView automaticallyAdjustContentInsets={false}
		showsVerticalScrollIndicator={false} style={s.list} 
		contentInset={{top:0, bottom: this.state.contentInsetBottom }} > 
		<Text style={s.category}>Dairy</Text>
		<Text>{label}</Text>
		</ScrollView></View> 
  )
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

