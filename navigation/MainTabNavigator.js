import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

import { RkTheme } from 'react-native-ui-kitten';

const DashStack = createStackNavigator({
  Home: Dashboard,
});

DashStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarOptions: {showLabel: false, style: { borderTopWidth: 0, backgroundColor: RkTheme.current.colors.white}},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-restaurant'}
    />
  ),
};

const SearchStack = createStackNavigator({
  Select: Search,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarOptions: {showLabel: false, style: { borderTopWidth: 0, backgroundColor: RkTheme.current.colors.white}},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-search'}
    />
  ),
};

const FavoritesStack = createStackNavigator({
  Auth: Favorites,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarOptions: {showLabel: false, style: { borderTopWidth: 0, backgroundColor: RkTheme.current.colors.white}},
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-heart'}
    />
  ),
};

export default createBottomTabNavigator({
  DashStack,
  SearchStack,
  FavoritesStack,
});
