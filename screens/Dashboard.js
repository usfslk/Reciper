import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions, Keyboard, Alert} from 'react-native';
import { RkButton, RkCard, RkTheme, RkTextInput, RkText } from 'react-native-ui-kitten';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import ImageLoad from 'react-native-image-placeholder';
import { SearchBar, Icon, Rating} from 'react-native-elements';

import Search from '../screens/Search';
import Browser from '../screens/Browser';
import Navbar from '../components/Navbar';
import Count from '../components/Count';
import Layout from '../constants/Layout';
import Results from '../components/Results';
import Spinner from '../components/Spinner';

const dairy = ['Milk', 'Eggs', 'Butter', 'Parmesan', 'Cheddar', 'Cream cheese', 'Yogurt', 'Goat cheese', 'Brie', 'Gouda', 'Creme fraiche', 'Mascarpone', 'Emmental', 'Neufchatel']
const vegetables = ['Potato', 'Tomato', 'Onion', 'Garlic', 'Basil', 'Broccoli', 'Carrot', 'Mushroom', 'Green beans', 'Ginger', 'Chili pepper', 'Celeryn', 'Rosemary', 'Red onions', 'Sweet potato', 'Avocado', 'Olives','Asparagus', 'Pumpkin', 'Squash', 'Mint', 'Radish', 'Artic' ]
const meats = ['Bacon', 'Fish', 'Whole chicken', 'Chicken breast','Beef steak','Ham', 'Hot dog','Pork chops', 'Chicken thighs', 'Ground turkey', 'Pork', 'Pepperoni', 'Ground pork' ,'Chorizo', 'Salami', 'Spam', 'Venison', 'Bologna', 'Lamb', 'Corned beef', 'Duck', 'Ground veal', 'Goose', 'Oxtail', 'Foie gras', 'Snail', 'Alligator']
 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
  backgroundColor: RkTheme.current.colors.white ,
  borderRadius: 50,  color: '#000000',
  height: 25, width: 120,
  content: {fontWeight: 'bold',
  fontSize: 14 }
});

RkTheme.setType('RkButton', 'red', {
  borderRadius: 5,  color: RkTheme.current.colors.red,
  fontSize: 10, backgroundColor: 'transparent'
 });

RkTheme.setType('RkText','header', {
  textAlign: 'left',
  fontWeight: 'bold',
});

RkTheme.setType('RkButton','outline', {
  color: RkTheme.current.colors.black, 
  borderColor: RkTheme.current.colors.black
});

RkTheme.setType('white', {
  color: RkTheme.current.colors.white ,
});

RkTheme.setType('RkButton', 'icon', {
  fontSize: 24,
  width: 46,
  borderRadius: 25,
  hitSlop: {top: 5, left: 5, bottom: 5, right: 5},
  backgroundColor: 'transparent' ,
});




export default class Dashboard extends Component {
    static navigationOptions = {
    header: null,
  };

  constructor(props) {
  super(props);
  this.state = {
    loading: false,
    loaded: false,
    selectedIngredients: [],
    ex: 'super super',
    data: [],
    query: '',
  }
}

  onSelectionsChange = (selectedIngredients) => {
    this.setState({ selectedIngredients })
  }
      switcher() {
        const { navigate } = this.props.navigation;
        navigate('Select', {passedData:this.state.selectedIngredients });
      }

  render() {
  const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
     <Navbar title="Reciper." function="Submit" type="white" handle={() => this.switcher()} />

      {this.state.loading ? <Spinner /> : null }

             <ParallaxScrollView
              style={{ flex: 1, overflow: 'hidden' }}
              renderBackground={() => <Image source={{ uri: `https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a5e4cac8bcaf69ffaf5d3b1c2b063e4&auto=format&fit=crop&w=1350&q=80`, width: window.width, height: 250 }}/>}
              renderFixedHeader={() => 
                <View>

                <SearchBar
                  containerStyle={{ backgroundColor: '#fff',borderBottomWidth: 0,
                  borderTopWidth: 0, marginHorizontal: 0, }}
                  inputStyle={{ backgroundColor: 'transparent'}}
                  inputContainerStyle={{ backgroundColor: '#000000'}}
                  searchIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}

                  placeholder='Add an ingredient'
                  value={this.state.query}
                  onChangeText={(query) => this.updateChild(query.target.value)}
                />                

                </View>}

              parallaxHeaderHeight={ 250 }>

              <View style={{backgroundColor: RkTheme.current.colors.darkblue }} >
              <Text style={s.category}>Dairy</Text>
               <SelectMultiple
                  items={dairy}
                  selectedItems={this.state.selectedIngredients}
                  onSelectionsChange={this.onSelectionsChange} />
               <Text style={s.category}>Meats</Text>
               <SelectMultiple
                  items={meats}
                  selectedItems={this.state.selectedIngredients}
                  onSelectionsChange={this.onSelectionsChange} />   
               <Text style={s.category}>Vegetables</Text>
               <SelectMultiple
                  items={vegetables}
                  selectedItems={this.state.selectedIngredients}
                  onSelectionsChange={this.onSelectionsChange} />
            </View>
          </ParallaxScrollView>

          <View style={{backgroundColor: '#fff'}} ><Count results={this.state.selectedIngredients}/>

          </View>

      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',

  },
  foreground: {
    height: 300, flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  mainheader: {
    fontWeight: 'bold',
    color: '#fff'
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingLeft: 15,
    color: RkTheme.current.colors.white
  },


});