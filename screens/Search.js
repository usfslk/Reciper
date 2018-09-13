import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, FlatList, Alert, Keyboard} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon } from 'react-native-elements';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import ImageLoad from 'react-native-image-placeholder';

import Navbar from '../components/Navbar';
import Results from '../components/Results';

RkTheme.setType('RkCard', 'story', {
  img: {
    height: 300,
  },
  header: {
    alignSelf: 'center'
  },
  content:{
    alignSelf:'center'
  }
});



export default class Search extends Component {
    static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
  super(props)
  this.state = {
    loading: false,
    loaded: false
  } 
}


  apiCall() {
    const { navigation } = this.props;
    const passedData = navigation.getParam('passedData', 'some default value'); 

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
            data: responseJson.results,
            loading: false,
            loaded: false,
          });
        }) 
  }

    splash() {
    let url = "http://www.recipepuppy.com/api/"
    this.setState({ loading: true  });

      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson.results,
            loading: false,
            loaded: true,
          });
        }) 
  }

  componentWillReceiveProps () {
        Alert.alert("receive props")
       this.apiCall();
  }

    componentDidMount () {
        Alert.alert("did mount")
       this.splash();
  }

  render() {
    const { navigation } = this.props;
    const passedData = navigation.getParam('passedData', 'some default value');

    return (
      <View>

      <Navbar title="Results" name="refresh" function=""  handle={() => this.apiCall()} type="icon" />
      {this.state.loading ? <View style={s.loading} ><Image 
      source={require('../assets/loading.gif')}
      /></View> : null }

      <SearchBar
        containerStyle={{
          backgroundColor: RkTheme.current.colors.white,
          borderBottomWidth: 0,
          borderTopWidth: 0,
          marginHorizontal: 0,
                       }}
        inputStyle={{
          backgroundColor: '#fff',
        }}
        inputContainerStyle={{
          backgroundColor: '#000000'
        }}
        searchIcon={{ size: 24 }}
        placeholder='Looking for something specific?'
        value={this.state.query}
        onChangeText={(query) => this.updateChild(query.target.value)}
         />

      {this.state.loaded ?
        <Results results={this.state.data} /> 
      : null }
    </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
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
    textAlign: 'center'
  },
  flat: {
    backgroundColor: '#eee'
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100
  }

});