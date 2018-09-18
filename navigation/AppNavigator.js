import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import BrowserScreen from '../screens/BrowserScreen';
import FavScreen from '../screens/FavScreen';

import { RkTheme } from 'react-native-ui-kitten';


const HomeStack = createStackNavigator({
  HomeScreen: HomeScreen,
});

const ResultsStack = createStackNavigator({
  ResultsScreen: ResultsScreen,
  BrowserScreen: BrowserScreen,
});

const FavStack = createStackNavigator({
  FavScreen: FavScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarOptions: {showLabel: false, style: { borderTopWidth: 0, backgroundColor: '#fff'}},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'dashboard'}
    />
  ),
};

ResultsStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarOptions: {showLabel: false, style: { borderTopWidth: 0, backgroundColor: '#fff'}},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'restaurant'}
    />
  ),
};

FavStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarOptions: {showLabel: false, style: { borderTopWidth: 0, backgroundColor: '#fff'}},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'favorite'}
    />
  ),
};



export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Results: ResultsStack,
    Favorites: FavStack
  },
  {
    /* Other configuration remains unchanged */
  }
);
