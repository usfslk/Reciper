import React, { Component } from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, ScrollView, Alert} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon } from 'react-native-elements';
import ImageLoad from 'react-native-image-placeholder';

import WebViewContainer from '../components/WebViewContainer';

RkTheme.setType('RkCard', 'story', {
  img: {
    height: 100,
  },
  content:{
    paddingBottom: 0
  },
  container: {
    backgroundColor: '#fff',
    marginBottom: 0
  }
});


export default class Results extends Component {
constructor(props) {
  super(props)
  this.state = {
    query: '',
    webview: false,
  } 
}

test() {
	this.props.navigation.navigate('Browser',{ source: item.href })
}


	render () {

    return (
	<ScrollView>
	<SearchBar
		containerStyle={{ backgroundColor: '#fff',borderBottomWidth: 0,
		borderTopWidth: 0, marginHorizontal: 0}}
		inputStyle={{ backgroundColor: 'transparent'}}
		searchIcon={{ size: 24 }}
		placeholder='Looking for something specific?'
		value={this.state.query}
		onChangeText={(query) => this.updateChild(query.target.value)}
	/>

	 <FlatList
	  data={this.props.results}
	  showsVerticalScrollIndicator={false}
	  keyExtractor={(item, index) => item.href}
	  ListEmptyComponent={this.noItemDisplay}
	  renderItem={({ item, index }) => (

	  <RkCard rkType='story'>
	    <View rkCardContent>
	      <ImageLoad isShowActivity={false} borderRadius={5} placeholderStyle={{ width: 20, height: 20}} style={s.pix} source={{uri: item.thumbnail}}/>
		  <RkText rkType='header'>{item.title.trim()}</RkText>
	      <RkText style={{textAlign: 'justify' }} >{item.ingredients.trim()}</RkText>
	   </View>
	    <View rkCardFooter>
	      <RkButton rkType='small outline' onPress={this.test}>View</RkButton>

	      <RkButton rkType='small red'><Icon name='favorite-border' color={RkTheme.current.colors.red}/></RkButton>
	    </View>
	  </RkCard>
	       
	  )}/>

	</ScrollView> 

    );
  }
}


const s = StyleSheet.create({
  flat: {
    flex: 1
  },
  pix: {
  	width: 90,
  	height: 40,
  	marginBottom: 5
  }
});