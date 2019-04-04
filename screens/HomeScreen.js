import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, StatusBar, Text } from 'react-native';

import SelectMultiple from 'react-native-select-multiple';
import * as Animatable from 'react-native-animatable';
import { RkButton } from 'react-native-ui-kitten';
import { AdMobBanner } from 'expo';

import Navbar from '../components/Navbar';
import Theme from '../constants/Theme';
import Count from '../components/Count';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const bottom_initial = 0;

const dairy = ['Milk', 'Eggs', 'Butter', 'Parmesan', 'Cheddar', 'Cream cheese', 'Yogurt', 'Goat cheese', 'Brie', 'Gouda', 'Creme fraiche', 'Mascarpone', 'Emmental', 'Neufchatel']
const vegetables = ['Potato', 'Tomato', 'Onion', 'Garlic', 'Basil', 'Broccoli', 'Carrot', 'Mushroom', 'Green beans', 'Ginger', 'Chili pepper', 'Celeryn', 'Rosemary', 'Red onions', 'Sweet potato', 'Avocado', 'Olives', 'Asparagus', 'Pumpkin', 'Squash', 'Mint', 'Radish', 'Artic']
const meats = ['Bacon', 'Fish', 'Whole chicken', 'Chicken breast', 'Beef steak', 'Ham', 'Hot dog', 'Pork chops', 'Chicken thighs', 'Ground turkey', 'Pork', 'Pepperoni', 'Ground pork', 'Chorizo', 'Salami', 'Spam', 'Venison', 'Bologna', 'Lamb', 'Corned beef', 'Duck', 'Ground veal', 'Goose', 'Oxtail', 'Foie gras', 'Snail', 'Alligator']
const fruits = ['Lemon', 'Apple', 'Banana', 'Lime', 'Orange', 'Blueberry', 'Raisin', 'Grape', 'Peach', 'Date', 'Apricot', 'Tangerine', 'Watermelon']
const grains = ['Rice', 'Pasta', 'Flour', 'Bread', 'Baking soda', 'Quinoa', 'Bread crumbs', 'Noodle', 'Brown rice', 'Chips', 'Biscuits', 'Bagel', 'Pie', 'Ramen']
const desserts = ['Chocolate', 'Strawberry jam', 'Marshmallow', 'Syrup', 'Potato chips', 'Nutella', 'Caramel', 'Candy', 'Corn chips', 'Cookies', 'Peach preserves', 'Black pudding', 'Fudge', 'Lemon jelly']

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIngredients: [],
      data: [],
      query: '',
      dairy: true,
      vegetables: false,
      meats: false,
      fruits: false,
      grains: false,
      desserts: false,
      contentInsetBottom: bottom_initial,
      loading: true,
    }
  }


  clearSelection() {
    this.setState({ selectedIngredients: [] });
  }

  dairy() {
    this.setState({ dairy: true, fruits: false, grains: false, desserts: false, meats: false, vegetables: false });
  }

  vegetables() {
    this.setState({ vegetables: true, fruits: false, grains: false, desserts: false, dairy: false, meats: false });

  }
  meats() {
    this.setState({ meats: true, fruits: false, grains: false, desserts: false, dairy: false, vegetables: false });
  }

  fruits() {
    this.setState({ fruits: true, grains: false, desserts: false, dairy: false, meats: false, vegetables: false });
  }

  grains() {
    this.setState({ grains: true, fruits: false, desserts: false, dairy: false, meats: false, vegetables: false });
  }

  desserts() {
    this.setState({ desserts: true, grains: false, fruits: false, dairy: false, meats: false, vegetables: false });
  }

  onSelectionsChange = (selectedIngredients) => {
    this.setState({ selectedIngredients })
  }
  switcher() {
    const { navigate } = this.props.navigation;
    navigate('ResultsScreen', { passedData: this.state.selectedIngredients });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s.container}>
        <StatusBar animated translucent backgroundColor="rgba(0, 0, 0, 0.20)" />

        <Navbar title="Dashboard" function="Submit" type="white" handle={() => this.switcher()} />

        <View>
          <Count results={this.state.selectedIngredients} />
        </View>

        <View style={s.divider} />

        <View style={{
          flexDirection: 'row', justifyContent: 'center',
        }}>
          <AdMobBanner
            adSize="smartBanner"
            adUnitID="ca-app-pub-8573101599140905/4705314737"
          />
        </View>

        <View style={s.divider} />
        <Animatable.View easing='ease-in' duration={300} animation="fadeInUp" style={s.btnblock}>

          <RkButton onPress={this.dairy.bind(this)} rkType={'category'}>Dairy</RkButton>
          <RkButton onPress={this.meats.bind(this)} rkType={'category'}>Meats</RkButton>
          <RkButton onPress={this.vegetables.bind(this)} rkType={'category'}>Vegetables</RkButton>

        </Animatable.View>
        <View style={s.divider} />

        <Animatable.View easing='ease-in' duration={300} animation="fadeInUp" style={s.btnblock}>

          <RkButton onPress={this.fruits.bind(this)} rkType={'category'}>Fruits</RkButton>
          <RkButton onPress={this.grains.bind(this)} rkType={'category'}>Grains</RkButton>
          <RkButton onPress={this.desserts.bind(this)} rkType={'category'}>Desserts</RkButton>

        </Animatable.View>

        <View style={s.divider} />
        <RkButton onPress={this.clearSelection.bind(this)} rkType={'clear'}>Clear Selection</RkButton>
        <View style={s.divider} />

        <View style={{ flex: 1 }}>

          {this.state.dairy ? <Animatable.View easing='ease-in' duration={600} animation="fadeIn">
            <ScrollView automaticallyAdjustContentInsets={false}
              showsVerticalScrollIndicator={false} style={s.list}
              contentInset={{ top: 0, bottom: this.state.contentInsetBottom }} >
              <Text style={s.category}>Dairy</Text>
              <SelectMultiple items={dairy} selectedLabelStyle={{ fontFamily: 'regular' }} labelStyle={{ fontFamily: 'light' }}
                selectedItems={this.state.selectedIngredients} rowStyle={{ borderBottomColor: '#fff', marginVertical: -5 }} 
                onSelectionsChange={this.onSelectionsChange} />
            </ScrollView>
          </Animatable.View> : null}

          {this.state.meats ? <Animatable.View easing='ease-in' duration={600} animation="fadeIn">
            <ScrollView automaticallyAdjustContentInsets={false}
              style={s.list} showsVerticalScrollIndicator={false}
              contentInset={{ top: 0, bottom: this.state.contentInsetBottom }} >
              <Text style={s.category} >Meats</Text>
              <SelectMultiple items={meats} selectedLabelStyle={{ fontFamily: 'regular' }} labelStyle={{ fontFamily: 'light' }}
                selectedItems={this.state.selectedIngredients} rowStyle={{ borderBottomColor: '#fff', marginVertical: -5 }}
                onSelectionsChange={this.onSelectionsChange} />
            </ScrollView>
            </Animatable.View> : null}

          {this.state.vegetables ? <Animatable.View easing='ease-in' duration={600} animation="fadeIn">
            <ScrollView automaticallyAdjustContentInsets={false}
              style={s.list} showsVerticalScrollIndicator={false}
              contentInset={{ top: 0, bottom: this.state.contentInsetBottom }} >
              <Text style={s.category}>Vegetables</Text>
              <SelectMultiple items={vegetables} selectedLabelStyle={{ fontFamily: 'regular' }} labelStyle={{ fontFamily: 'light' }}
                selectedItems={this.state.selectedIngredients} rowStyle={{ borderBottomColor: '#fff', marginVertical: -5 }}
                onSelectionsChange={this.onSelectionsChange} />
            </ScrollView>
            </Animatable.View> : null}

          {this.state.fruits ? <Animatable.View easing='ease-in' duration={600} animation="fadeIn">
            <ScrollView automaticallyAdjustContentInsets={false}
              showsVerticalScrollIndicator={false} style={s.list}
              contentInset={{ top: 0, bottom: this.state.contentInsetBottom }} >
              <Text style={s.category} >Fruits</Text>
              <SelectMultiple items={fruits} selectedLabelStyle={{ fontFamily: 'regular' }} labelStyle={{ fontFamily: 'light' }}
                selectedItems={this.state.selectedIngredients} rowStyle={{ borderBottomColor: '#fff', marginVertical: -5 }}
                onSelectionsChange={this.onSelectionsChange} />
            </ScrollView>
            </Animatable.View> : null}

          {this.state.grains ? <Animatable.View easing='ease-in' duration={600} animation="fadeIn">
            <ScrollView automaticallyAdjustContentInsets={false}
              style={s.list} showsVerticalScrollIndicator={false}
              contentInset={{ top: 0, bottom: this.state.contentInsetBottom }} >
              <Text style={s.category} >Grains and Bakery</Text>
              <SelectMultiple items={grains} selectedLabelStyle={{ fontFamily: 'regular' }} labelStyle={{ fontFamily: 'light' }}
                selectedItems={this.state.selectedIngredients} rowStyle={{ borderBottomColor: '#fff', marginVertical: -5 }}
                onSelectionsChange={this.onSelectionsChange} />
            </ScrollView>
            </Animatable.View> : null}

          {this.state.desserts ? <Animatable.View easing='ease-in' duration={600} animation="fadeIn">
            <ScrollView automaticallyAdjustContentInsets={false}
              style={s.list} showsVerticalScrollIndicator={false}
              contentInset={{ top: 0, bottom: this.state.contentInsetBottom }} >
              <Text style={s.category}>Desserts</Text>
              <SelectMultiple items={desserts} labelStyle={{ fontFamily: 'light' }} selectedLabelStyle={{ fontFamily: 'regular' }}
                selectedItems={this.state.selectedIngredients} rowStyle={{ borderBottomColor: '#fff', marginVertical: -5 }}
                onSelectionsChange={this.onSelectionsChange} />
            </ScrollView>
            </Animatable.View> : null}

        </View>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1
  },
  list: {
    marginHorizontal: 0,
    marginBottom: 0,
  },
  btnblock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  mainheader: {
    fontFamily: 'bold',
    color: '#fff'
  },
  category: {
    fontSize: 20,
    fontFamily: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    marginVertical: 8
  }

});