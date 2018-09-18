import React, { Component } from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import { SearchBar, Icon, Card } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';


class Results extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    query: '',
    loading: true,
  } 
}

componentDidMount() {
  this.refs.listRef.scrollToOffset({x: 0, y: 0, animated: true}) 
}

  apiCall(query) {
    let url = "http://www.recipepuppy.com/api/?q=" + query
    this.setState({ loading: true  });
    Keyboard.dismiss()
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson.results,
            loaded: true,
            loading: false,
          });
        }) 
  }


	render () {
    const { navigate } = this.props.navigation;
    return (
	<ScrollView style={s.flat} >

	{this.state.loading ?  <Spinner textContent={"Loading..."} textStyle={{color: '#FFF'}}  />
     : null }

	 <FlatList
	  ref="listRef"
	  data={this.props.results}
	  style={{marginBottom: 15}}
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
		fontWeight: 'bold',
		fontSize: 20,
	},
	card: {
		backgroundColor: '#fff',
		marginTop: 10,
		paddingVertical: 10,
		paddingHorizontal: 30
	}
	});

export default withNavigation(Results);