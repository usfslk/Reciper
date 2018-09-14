import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, FlatList, Alert, Keyboard, Dimensions, WebView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon } from 'react-native-elements';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import ImageLoad from 'react-native-image-placeholder';

import Navbar from '../components/Navbar';
import Results from '../components/Results';
import Spinner from '../components/Spinner';

export default class Search extends Component {
    static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
  super(props)
  this.state = {
    loading: false,
  } 
}

  apiCall() {
    const { navigation } = this.props;
    const passedData = navigation.getParam('passedData', []); 

    let selectedIngredients = passedData;
    
    selectedValues = selectedIngredients.map((ingredient)=> ingredient.value)
    Values = selectedValues.join(',');
    ValuesInString = Values.replace(' ',"+")  
    let url = "http://www.recipepuppy.com/api/?i=" + ValuesInString
    this.setState({ loading: true  });
    Keyboard.dismiss()

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            userdata: responseJson.results,
            loaded: true,
            loading: false,
          });
        }) 
  }

  componentWillReceiveProps () {
       this.apiCall();
         const { navigation } = this.props;
  navigation.addListener( 'didFocus', () => this.apiCall() );
  }

componentDidMount() {
  const { navigation } = this.props;
  navigation.addListener( 'didFocus', () => this.apiCall() );
  
}

  render() {
    const { navigation } = this.props;
    const passedData = navigation.getParam('passedData', 'some default value');

    return (
      <View style={{ flex: 1 }}>
      <Navbar title="Results" name="refresh" function=""  handle={() => this.apiCall()} type="icon" />
      {this.state.loading ? <Spinner /> : null }

      {this.state.loaded ?
        <Results results={this.state.userdata} />
      : null }

    </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
});