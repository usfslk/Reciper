import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, StatusBar, Keyboard } from 'react-native';
import Navbar from '../components/Navbar';
import { RkTextInput } from 'react-native-ui-kitten';
import { Text } from 'react-native-elements';
import firebase from '../components/config';
import Favorites from '../components/Favorites';
import PopupDialog from 'react-native-popup-dialog';

class FavScreen extends Component {
  static navigationOptions = { header: null };
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

  componentWillMount = () => {
    this.setState({ loading: true })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, loggedOut: false, loading: false });
      }
      else {
        this.setState({ loggedIn: false, loggedOut: true, loading: false });
      }
    });
  }

  onLogIn = () => {
    this.setState({ loading: true });
    const { email, password } = this.state;
    Keyboard.dismiss()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(() => {
        this.popupError.show();
      })
  };

  onSignUp = () => {
    const { email, password } = this.state;
    this.setState({ loading: true });
    Keyboard.dismiss()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(() => {
        this.popupError.show();
        this.setState({ loading: false });
      })
    this.popupWelcome.show();
  };

  onLogOut() {
    firebase.auth().signOut();
  };

  onSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  };

  render() {
    return (

      <View style={s.container} >
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.20)"
          animated
        />
        <Navbar title='Favorites' name="exit-to-app" function="" handle={this.onLogOut} type="icon" />

        {this.state.loading ?
          <View style={s.spinner}>
            <Image style={{ width: 25, height: 25 }}
              source={require('../assets/loading.gif')}
            />
          </View>
          : null}

        <PopupDialog height={150} width={0.8} dialogStyle={{ justifyContent: 'center', alignItems: 'center' }}
          ref={(popupDialog) => { this.popupWelcome = popupDialog; }}
        >
          <View>
            <Text>Welcome</Text>
          </View>
        </PopupDialog>

        <PopupDialog height={150} width={0.8} dialogStyle={{ justifyContent: 'center', alignItems: 'center' }}
          ref={(popupDialog) => { this.popupError = popupDialog; }}
        >
          <View>
            <Text style={{ textAlign: 'center' }} >The username and password you entered did not match our records. Please double-check and try again.</Text>
          </View>
        </PopupDialog>

        {/*      <SearchBar
        containerStyle={{ backgroundColor: '#fff',borderBottomWidth: 0,
        borderTopWidth: 0, marginHorizontal: 0}}
        inputStyle={{ backgroundColor: 'transparent'}}
        searchIcon={{ size: 24 }}
        placeholder='Looking for something specific?'
      />*/}

        {this.state.loggedOut ?
          <Text style={s.infoheader}>Please create an account or sign in to use this feature</Text>
          : null}

        {this.state.loggedOut ?
          <View style={{ paddingHorizontal: 25 }} >
            <RkTextInput
              style={s.textinput}
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />

            <RkTextInput
              style={s.textinput}
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </View>
          : null}

        {this.state.loggedOut ?
          <View style={s.authbtn}>
            <TouchableOpacity
              style={s.button}
              onPress={this.onLogIn}>
              <Text style={s.textbutton}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.button}
              onPress={this.onSignUp}>
              <Text style={s.textbutton}>Sign up</Text>
            </TouchableOpacity>
          </View>
          : null}

        {this.state.loggedIn ?
          <Favorites />
          : null}

      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textbutton: {
    fontSize: 18,
    paddingHorizontal: 50,
    paddingVertical: 10,
    textAlign: 'center',
    color: '#fcfcfc',
  },
  infoheader: {
    fontSize: 18,
    paddingVertical: 45,
    textAlign: 'center',
    marginHorizontal: 25
  },
  loading: {
    margin: 40,
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 25,
    backgroundColor: '#004eaf',
    borderRadius: 25
  },
  authbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 7,
    marginHorizontal: 25,
  },
  spinner: {
    alignSelf: 'center',
    marginVertical: 25,
  },
  textinput: {
    backgroundColor: '#fff',
  },

})

export default FavScreen;
