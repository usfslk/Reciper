import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';

console.ignoredYellowBox = ['Setting a timer'];

class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favoritesList: [],
      keys: [],
      loaded: false,
      loading: true,
      empty: false
    }
  }

  componentDidMount = () => {
    const { currentUser } = firebase.auth();
    this.setState({ loading: true })
    firebase.database().ref(`/users/${currentUser.uid}/favorites/`)
      .on('value', snapshot => {
        var obj = snapshot.val()
        var favoritesList = []
        var keys = []
        for (let a in obj) {
          favoritesList.push(obj[a])
          keys.push(a)
        }
        this.setState({
          favoritesList: favoritesList,
          keys: keys,
          loading: false,
          loaded: true,
        }, () => {
          if (this.state.favoritesList.length === 0)
            this.setState({ loading: false, empty: true })
        });
      });
  }

  delete(index) {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/favorites/${this.state.keys[index]}`)
      .remove()
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s.container}>

        {this.state.loading ?
          <View style={s.spinner}>
            <Image style={{ width: 25, height: 25 }}
              source={require('../assets/loading.gif')}
            />
          </View>
          : null}

        {this.state.loaded ?
          <FlatList style={{ marginVertical: 15 }}
            data={this.state.favoritesList}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.link}
            renderItem={({ item, index }) => (

              <View style={s.card} >
                <TouchableWithoutFeedback onPress={() =>
                  navigate('BrowserScreen',
                    { link: item.link, title: item.title.trim() })
                }>
                  <View>
                    <Text style={s.header}>{item.title}</Text>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.delete(index)} >
                  <View>
                    <Image style={s.delete}
                      source={require('../assets/images/delete.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>

            )} />
          : null}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
  favtext: {
    fontFamily: 'regular',
    fontSize: 18,
    paddingLeft: 25,
    paddingVertical: 9,
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    marginHorizontal: 25,
    marginVertical: 10
  },
  textbutton: {
    textAlign: 'center',
    fontFamily: 'regular',

  },
  ing: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'regular',
  },
  header: {
    fontSize: 16,
    maxWidth: '90%',
    fontFamily: 'regular',

  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 25,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  empty: {
    backgroundColor: '#fff',
    marginVertical: 25,
    marginHorizontal: 25,
    borderRadius: 8
  },
  emptytext: {
    paddingVertical: 50,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'regular',

  },
  spinner: {
    alignSelf: 'center',
    marginVertical: 50,
  },
  delete: {
    width: 25,
    height: 25
  }
});

export default withNavigation(Favorites);
