import React, { Component } from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, ScrollView, Alert} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon, Card } from 'react-native-elements';
import ImageLoad from 'react-native-image-placeholder';
import { withNavigation } from 'react-navigation';


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

	<Card title={item.title.trim()}>
		<Text style={s.ing} >{item.ingredients.trim()}</Text>
		<View style={s.row}>
		<ImageLoad isShowActivity={false} borderRadius={5}
		placeholderStyle={{ width: 20, height: 20}}
		style={s.pix}
		resizeMode="cover"
		source={{uri: item.thumbnail}}
		/>
		<RkButton rkType='small outline' onPress={() => navigate('Browser', { link: item.href, title: item.title.trim() })} >View</RkButton>
		</View>
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
  pix: {
  	width: 90,
  	height: 40,
  	marginVertical: 5
	},
	row: {
	 flexDirection: 'row' ,
	 justifyContent: 'space-between',
	 alignItems: 'center'
	},
	ing: {
	  textAlign: 'center', fontSize: 14, fontWeight: '200', marginBottom: 10
	}
});

export default withNavigation(Results);