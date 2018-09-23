import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import BrowserScreen from '../screens/BrowserScreen';
import FavScreen from '../screens/FavScreen';

import { RkTheme } from 'react-native-ui-kitten';
import {  Icon } from 'react-native-elements';

export default createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarColor: RkTheme.current.colors.white,
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20} name={'dashboard'} />
        )
      }
    },
    ResultsScreen: {
      screen: ResultsScreen,
      navigationOptions: {
        tabBarLabel: 'Results',
        tabBarColor: RkTheme.current.colors.white,
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20}  name={'restaurant'}/>
        )
      }
    },
    FavScreen: {
      screen: FavScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarColor: RkTheme.current.colors.white,
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={20}  name={'favorite'}  />
        )
      }
    }
  }, 
  {
    shifting: true,
    activeTintColor: RkTheme.current.colors.black,
    barStyle: {
      height: 55
    },

  }
);