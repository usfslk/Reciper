import React from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, Alert  } from 'react-native';
import { RkTheme, RkButton } from 'react-native-ui-kitten';
import {  Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class Navbar extends React.Component {

  render() {
    return (

          <View style={s.navbar}>
              <View style={s.inner}>
                <Text style={s.title}>{this.props.title}</Text>
              </View>
              <Animatable.View easing='ease-out-cubic' duration={1000} animation="pulse" style={s.inner}>
                <RkButton onPress={this.props.handle} rkType={this.props.type}>{this.props.function}<Icon
                name={this.props.name} color='#fcfcfc'/></RkButton>
              </Animatable.View> 
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
  },
  inner: {
    marginTop: 20,
    marginHorizontal: 20
  }
});