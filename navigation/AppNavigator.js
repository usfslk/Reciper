import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CustomNavigator from './CustomNavigator';
import Browser from '../screens/Browser'

export default createSwitchNavigator({
    Main: MainTabNavigator,
    Custom: CustomNavigator,
},{
	initialRouteName: 'Main' 
}
);