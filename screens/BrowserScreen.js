import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, WebView, StatusBar} from 'react-native';
import { RkButton, RkCard, 
        RkTheme,
        RkText,
        } from 'react-native-ui-kitten';

import SelectMultiple from 'react-native-select-multiple';
import { withNavigation } from 'react-navigation';

import Navbar from '../components/Navbar';
import Results from '../components/Results';

class BrowserScreen extends React.Component {
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
        this.setState({ loaded : false });
        const { navigate } = this.props.navigation;
        navigate.goBack(null);

}

componentDidMount() {
  const { navigation } = this.props;
  const link = navigation.getParam('link', 'www.google.com');
  const title = navigation.getParam('title', 'Reciper');
  this.setState({source: link, title: title})
}


  render() {
        const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1}}>
      <StatusBar
      translucent
      backgroundColor="rgba(0, 0, 0, 0.20)"
      animated
      />
      <Navbar title={this.state.title} name="close" function=""  handle={() => goBack(null)} type="icon" />
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

export default withNavigation(BrowserScreen);