import React, { Component } from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, ScrollView, Dimensions, TouchableOpacity, Image, Alert} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon, Card } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase';

class Results extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    query: '',
  } 
}

componentDidMount() {
  this.refs.listRef.scrollToOffset({x: 0, y: 0, animated: true}) 
}

	render () {
    const { navigate } = this.props.navigation;
    return (
     <Animatable.View style={s.flat} easing='ease-out-cubic' duration={1000} animation="slideInUp" >

	 <FlatList
	  ref="listRef"
	  data={this.props.results}
	  showsVerticalScrollIndicator={false}
	  keyExtractor={(item, index) => item.href}
	  ListEmptyComponent={this.noItemDisplay}
	  renderItem={({ item, index }) => (

	<View style={s.card} >
	<TouchableOpacity
	  onPress={() => navigate('BrowserScreen', { link: item.href, title: item.title.trim() })}
	  underlayColor='red'>
			<Text style={s.header} >{item.title.trim()}</Text>
			<Text style={s.ing} >{item.ingredients.trim()}</Text>
	</TouchableOpacity>
	</View>

	  )}/>

	</Animatable.View> 

    );
  }
}


const s = StyleSheet.create({
  flat: {
    flex:1,
    paddingBottom:0
  },
	btn: {
	 flexDirection: 'row' ,
	 alignItems: 'center',
	 justifyContent: 'center',
	 marginTop: 20, flex: 1
	},
	ing: {
	   fontSize: 12, fontWeight: '200', 
	   textAlign: 'left', flex: 1
	}, 
	header: {
		fontSize: 16,
	},
	card: {
		backgroundColor: '#fff',
		marginBottom: 7.5,
		paddingVertical: 10,
		paddingHorizontal: 30,
		
	},

	inner: {
		marginTop: 20,


	}	});

export default withNavigation(Results);