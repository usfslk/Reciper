/**
 * Youssef Selkani
 * https://chrysntm.com
 */

import React from 'react';
import { StatusBar, StyleSheet, View, } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {
  setCustomText,
} from 'react-native-global-props';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      regular: require("./assets/fonts/regular.otf"),
      bold: require("./assets/fonts/bold.otf"),
      light: require("./assets/fonts/light.otf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const customTextProps = {
  style: {
    fontFamily: 'regular',
  }
};

setCustomText(customTextProps);
