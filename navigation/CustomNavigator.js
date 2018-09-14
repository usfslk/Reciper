import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Dashboard from '../screens/Dashboard';
import Browser from '../screens/Browser';

import { RkTheme } from 'react-native-ui-kitten';

const BrowserStack = createStackNavigator({ Home: Dashboard, Browser: Browser });


export default createStackNavigator({
BrowserStack
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);
