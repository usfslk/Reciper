import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Count = (props) => {
  return (
    <View style={s.count}>
      <Text style={s.text} >You selected {props.results.length} ingredients!</Text>
    </View>
  );
}

export default Count

const s = StyleSheet.create({
  count: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 12,
    paddingVertical: 10,
    color: '#fcfcfc',
  }
});