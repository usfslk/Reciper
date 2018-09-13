import React from 'react';
import { Text } from 'react-native-elements';

export default class FavTitle extends React.Component {
  render() {
    return (
		<Text
		style={{color: '#fff', fontSize: 17, fontWeight: 'bold' }}>
		Favorites
		</Text>
    );
  }
}