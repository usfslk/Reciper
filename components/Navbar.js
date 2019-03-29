import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export default class Navbar extends React.Component {

  render() {
    return (
      <View style={s.navbar}>
        <View style={s.inner}>
          <Text style={s.title}>{this.props.title}</Text>
        </View>
        <Animatable.View easing='ease-out-cubic' duration={1000} animation="pulse" style={s.innerButton}>
          <RkButton onPress={this.props.handle} rkType={this.props.type}>{this.props.function}<Icon
            name={this.props.name} color='#fcfcfc' /></RkButton>
        </Animatable.View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  navbar: {
    height: 60 + getStatusBarHeight(),
    backgroundColor: '#004eaf',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    paddingTop: 25,
    paddingBottom: 12.5,

  },
  title: {
    color: '#F0F0F0',
    fontSize: 18,
    flexShrink:1
  },
  inner: {
    marginLeft: 25,
    maxWidth: '70%'
  },
  innerButton: {
    marginRight: 25,
  },

});