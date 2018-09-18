import React from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, Alert  } from 'react-native';
import { RkTheme, RkButton } from 'react-native-ui-kitten';
import {  Icon } from 'react-native-elements';


export default class Navbar extends React.Component {

  render() {
    return (

          <View style={s.navbar}>
              <View style={s.inner}>
                <Text style={s.title}>{this.props.title}</Text>
              </View>
              <View style={s.inner}>
                <RkButton onPress={this.props.handle} rkType={this.props.type}>{this.props.function}<Icon
                name={this.props.name} color='#fcfcfc'/></RkButton>
              </View> 
          </View>
    );
  }
}


const s = StyleSheet.create({
  navbar: {
    height: 100, 
    backgroundColor: '#000', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#F0F0F0', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  inner: {
    marginTop: 20,
    marginHorizontal: 20
  }
});