import React from 'react';

import Colors from '../constants/Colors';
import {  Icon } from 'react-native-elements';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
      name={this.props.name}
      color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      size={26}
      style={{ marginBottom: -3 }} 
      />
    );
  }
}