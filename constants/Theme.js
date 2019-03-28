import React from 'react';
import { RkTheme } from 'react-native-ui-kitten';

let Values = {
  fontSize: 15
};

RkTheme.setTheme({
  fonts: {
    sizes: {
      base: Values.fontSize,
      small: Values.fontSize * 0.8,
      medium: Values.fontSize,
      large: Values.fontSize * 1.2,
    }
  },
  colors: {
    success: '#2db928',
    black: '#000',
    white: '#f0f0f0',
    light: '#cdcdcd',
    grey: '#969696',
    darkgrey: '#737373',
    red: '#ff2d37',
    green: '#2db928',
    darkgreen: '#057855',
    blue: '#00a5dc',
    darkblue: '#004eaf',
    yellow: '#ffa500',
  }
});


RkTheme.setType('RkButton', 'white', {
  backgroundColor: RkTheme.current.colors.white,
  borderRadius: 50, color: '#000',
  width: 120, height: 30,
});

RkTheme.setType('RkButton', 'category', {
  borderRadius: 5, color: RkTheme.current.colors.darkgrey,
  fontSize: 14, backgroundColor: '#fff',
  marginHorizontal: 20, borderRadius: 5
});

RkTheme.setType('RkText', 'header', {
  textAlign: 'left',
  fontWeight: 'bold',
});

RkTheme.setType('RkButton', 'outline', {
  color: RkTheme.current.colors.black,
  borderColor: RkTheme.current.colors.black
});

RkTheme.setType('white', {
  color: "#000",
});

RkTheme.setType('RkButton', 'icon', {
  fontSize: 24,
  width: 46,
  borderRadius: 25,
  hitSlop: { top: 5, left: 5, bottom: 5, right: 5 },
  backgroundColor: 'transparent',
});

export default class Theme extends React.Component {
  render() {
    return (
      <View />
    );
  }
}
