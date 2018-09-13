import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import { RkButton, RkCard, 
        RkTheme,
        RkText,
        } from 'react-native-ui-kitten';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SelectMultiple from 'react-native-select-multiple';
import ImageLoad from 'react-native-image-placeholder';

import Navbar from '../components/Navbar';
import Results from '../components/Results';

export default class Favorites extends Component {
static navigationOptions = {
    header: null,
  };


  constructor(props) {
   super(props)
   this.state = {
     currentUser: '',
     error: null,
     UserInput: "",
     loggedIn: null,
     loggedOut: null,
     email: '', password: '',
   }
 }

/*componentWillMount = () => {
StatusBar.setHidden(true);
this.setState({ loading: true})

firebase.initializeApp({
  apiKey: "AIzaSyAqpqo8aWpC_sJ18CIUvWYUktGMf8w1ylE",
  authDomain: "course-4895c.firebaseapp.com",
  databaseURL: "https://course-4895c.firebaseio.com",
  projectId: "course-4895c",
  storageBucket: "",
  messagingSenderId: "369023837879"
    });
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({ loggedIn: true, loggedOut: false, loading: false  });
    }
    else {
      this.setState({ loggedIn: false, loggedOut: true, loading: false });
    }
  });
  }


onLogIn = () => {
  const { email, password } = this.state;
  this.setState({ error: '', loading: true });
  Keyboard.dismiss()
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onSuccess.bind(this))
  .catch(() => {
    alert('incorrect username or password')
  })
};

onSignUp = () => {
  const { email, password } = this.state;
  this.setState({ error: '', loading: true });
  Keyboard.dismiss()
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(this.onSuccess.bind(this))
  .catch(() => {
    alert('incorrect username or password')
    this.setState({loading: false})
  })
};

onLogOut() {
  firebase.auth().signOut()
};

onSuccess() {
  this.setState({
    email: '',
    password: '',
    loading: false,
    error: ''
  });
};

  */




  render() {
    return (
      <View style={{ flex: 1}}>
      <Navbar title="Favorites" function="Login" type="white" handle={() => this.login()} />
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    color: '#fff'
  },
});