import React, { Component } from 'react';
import {StyleSheet, Text, View, Keyboard, FlatList, StatusBar } from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';
import {  Icon } from 'react-native-elements';


export default class Results extends Component {
constructor(props) {
   super(props)
   this.state= {
   	loaded: true
   }
 }



	render () {
    return (
      <View style={s.results}>

     {this.state.loading ? <View style={s.loading} ><Image 
    source={require('../assets/loading.gif')}
    /></View> : null }

     <FlatList
      data={this.props.results}
      showsVerticalScrollIndicator={false}
      style={s.flat}
      keyExtractor={(item, index) => item.href}
      ListEmptyComponent={this.noItemDisplay}
      renderItem={({ item, index }) => (

      <RkCard rkType='story'>
        <View rkCardContent>
          <RkText rkType='header'>{item.title}</RkText>
          <RkText style={{textAlign: 'justify' }} >{item.ingredients}</RkText>
       </View>
        <View rkCardFooter>
          <RkButton rkType='small outline'>View</RkButton>
          <RkButton rkType='small red'><Icon name='favorite-border' color={RkTheme.current.colors.red}/></RkButton>
        </View>
      </RkCard>
           
      )}/>

      </View> 
    );
  }
}


const s = StyleSheet.create({
  results: {
    backgroundColor: RkTheme.current.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});