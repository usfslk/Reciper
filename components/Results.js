import React, { Component } from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, ScrollView, Dimensions} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon, Card } from 'react-native-elements';
import ImageLoad from 'react-native-image-placeholder';
import { withNavigation } from 'react-navigation';
const width = Dimensions.get('window').width;

RkTheme.setType('RkButton','block', {
	width: width / 1
});


class Results extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    query: '',
    webview: false,
  } 
}

	render () {
    const { navigate } = this.props.navigation;
    return (
	<ScrollView style={s.flat} >

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
	  style={{marginBottom: 15}}
	  showsVerticalScrollIndicator={false}
	  keyExtractor={(item, index) => item.href}
	  ListEmptyComponent={this.noItemDisplay}
	  renderItem={({ item, index }) => (

	<Card>	
	        <Text style={s.header} >{item.title.trim()}</Text>
			<Text style={s.ing} >{item.ingredients.trim()}</Text>
			<View style={s.btn} ><RkButton rkType='small block outline' onPress={() => navigate('Browser', { link: item.href, title: item.title.trim() })} >View</RkButton></View>
	</Card>

	  )}/>

	</ScrollView> 

    );
  }
}


const s = StyleSheet.create({
  flat: {
    flex: 1
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
		fontWeight: '400',
		fontSize: 20,
	}
	});

export default withNavigation(Results);