import React from 'react';

import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { RkTheme } from 'react-native-ui-kitten';
import { Icon } from 'react-native-elements';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import BrowserScreen from '../screens/BrowserScreen';
import FavScreen from '../screens/FavScreen';

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
  tabBarColor: RkTheme.current.colors.white,
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={20} name={'dashboard'} />
  )
};

ResultsStack.navigationOptions = {
  tabBarLabel: 'Results',
  tabBarColor: RkTheme.current.colors.white,
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={20} name={'restaurant'} />
  )
};

FavStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarColor: RkTheme.current.colors.white,
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon size={20} name={'favorite'} />
  )
};

export default createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Results: ResultsStack,
    Favorites: FavStack
  },
  {
    shifting: true,
    activeTintColor: RkTheme.current.colors.black,
    barStyle: {
      ...ifIphoneX({
        height: 70,
      }, {
          height: 55,
        })
    },
  }
);