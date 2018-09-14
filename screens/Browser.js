import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, WebView} from 'react-native';
import { RkButton, RkCard, 
        RkTheme,
        RkText,
        } from 'react-native-ui-kitten';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import ImageLoad from 'react-native-image-placeholder';
import { withNavigation } from 'react-navigation';

import Navbar from '../components/Navbar';
import Results from '../components/Results';

class Browser extends React.Component {
static navigationOptions = {
    header: null,
  };
  constructor(props) {
  super(props)
  this.state = {
    source: '',
    title: ''
  } 
}

back(){
        const { navigate } = this.props;
        navigation.navigate('Select');
}

componentDidMount() {
  const { navigation } = this.props;
  const link = navigation.getParam('link', 'google.com');
  const title = navigation.getParam('title', 'Reciper');
  this.setState({source: link, title: title})
}


  render() {
    return (
      <View style={{ flex: 1}}>
      <Navbar title={this.state.title} name="open-in-new" function=""  handle={this.back} type="icon" />
      <WebView
        source={{uri: this.state.source}}
      />
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

export default withNavigation(Browser);