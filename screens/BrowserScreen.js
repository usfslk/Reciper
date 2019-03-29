import React from 'react';
import { StyleSheet, Text, View, Image, WebView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import firebase from '../components/config';
import { withNavigation } from 'react-navigation';
import { AdMobBanner } from 'expo';
import Navbar from '../components/Navbar';
import PopupDialog from 'react-native-popup-dialog';

class BrowserScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      source: '',
      title: '',
    }
  }

  back() {
    this.setState({ loaded: false });
    const { navigate } = this.props.navigation;
    navigate.goBack(null);
  }

  saveData = () => {
    this.setState({ loading: true })
    let title = this.state.title;
    let link = this.state.source;
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/favorites/`)
      .push({ title, link })
      .then(() => {
        this.setState({ loading: false })
        this.popupSuccess.show();
      });
  }

  componentDidMount() {
    const { navigation } = this.props;
    const link = navigation.getParam('link', 'www.google.com');
    const title = navigation.getParam('title', 'Reciper');
    this.setState({ source: link, title: title })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, loggedOut: false, loading: false });
      }
      else {
        this.setState({ loggedIn: false, loggedOut: true, loading: false });
      }
    });
  }

  render() {
    const { goBack } = this.props.navigation;
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.20)"
          animated
        />

        <Navbar title={this.state.title} name="close" function="" handle={() => goBack(null)} type="icon" />
        <PopupDialog height={150} width={0.8} dialogStyle={{ justifyContent: 'center', alignItems: 'center' }}
          ref={(popupDialog) => {
            this.popupSuccess
              = popupDialog;
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
            <Image source={require('../assets/images/mark.png')} style={{ marginRight: 10 }} />
            <Text>Success</Text>
          </View>
        </PopupDialog>

        {this.state.loggedOut ?
          <TouchableOpacity
            style={s.button}
            onPress={() => navigate('FavScreen')}
          >
            <Text style={s.textbutton}>Save to Favorites</Text>
          </TouchableOpacity>
          : null}

        {this.state.loggedIn ?
          <TouchableOpacity
            style={s.button}
            onPress={this.saveData}>
            <Text style={s.textbutton}>Save to Favorites</Text>
          </TouchableOpacity>
          : null}


        <WebView
          source={{ uri: this.state.source }}
        />

        <View 
        style={{
        flexDirection: 'row', justifyContent: 'center', marginVertical: 15
        }}>
          <AdMobBanner
          adSize="smartBanner"
          adUnitID="ca-app-pub-8573101599140905/9082008283"
          />
        </View>

      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
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
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10
  },
  textbutton: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default withNavigation(BrowserScreen);