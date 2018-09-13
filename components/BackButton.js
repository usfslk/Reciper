import React, {  Component } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class BackButton extends Component {
  render() {
    return (


<View style={styles.row} >
	<View>
		<Text style={{color: '#222', fontSize: 14, fontWeight: 'bold', marginRight: 10 }}>
		Back to ingredients</Text>
	</View>
	<View>
      <Icon
      name='md-arrow-back'
      size={10} 
      type='ionicon'
      color='#222'
      /> 
	</View>
</View>


    );
  }
}

module.exports = BackButton;

const styles = StyleSheet.create({
 row: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5
  },

});
