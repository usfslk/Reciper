import React, { Component } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
  } from 'react-native';
import { withNavigation } from 'react-navigation';
import { RkTheme, RkButton, RkCard, RkText, rkCardContent, rkCardImg, rkCardFooter, RkTextInput} from 'react-native-ui-kitten';
import firebase from 'firebase';
import Icon from 'react-native-elements';

console.ignoredYellowBox = ['Setting a timer'];

class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favoritesList:[],
            keys:[],
            recipe: 'Testing',
            loaded: false,
            loading: true,
            empty: false
        }
      }
     
componentDidMount = () => {
const { currentUser } = firebase.auth();
this.setState({loading: true})
    firebase.database().ref(`/users/${currentUser.uid}/favorites/`)
    .on('value', snapshot => {
    var obj = snapshot.val()
    var favoritesList = []
    var keys = []
    for(let a in obj){
        favoritesList.push(obj[a])
        keys.push(a)
    }
    this.setState({
        userfav : snapshot.val(),
        favoritesList:favoritesList,
        keys:keys,
        loaded: true,
        loading: false,
    })
    });
  if (this.state.favoritesList.length = 0)
      this.setState({empty: true})
 
}

    
    render() {
        const { navigate } = this.props.navigation;
      return (
        <View style={s.container}>
        
      {this.state.empty ?  
        <View style={s.empty}>
        <Text style={s.emptytext} >
         Oh such empty!
        </Text></View>
         : null }

      {this.state.loading ? 
      <View style={s.spinner}>
      <Image style={{width: 25, height: 25}}
      source={require('../assets/loading.gif')}
      /> 
      </View>
      : null }

        {this.state.loaded ?
         <FlatList style={{marginVertical: 15 }}
          data={this.state.favoritesList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.link}
          renderItem={({ item, index }) => (

            <View style={s.card} >
            <TouchableOpacity
              onPress={() => navigate('BrowserScreen', { link: item.link, title: item.title.trim() })}
              underlayColor='red'>
                    <Text style={s.header}>{item.title}</Text>
            </TouchableOpacity>
            </View>

          )}/>
        : null }

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
    textAlign: 'center'  
},
ing: {
   fontSize: 12, 
   textAlign: 'left',
}, 
header: {
    fontSize: 20,
},
card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 25,
    borderRadius: 8
},
empty: {
  backgroundColor: '#fff',
  marginVertical: 25,
  marginHorizontal: 25,
  borderRadius: 8
},
emptytext: {
  paddingVertical: 50,
  textAlign:  'center', 
  fontSize: 18
},
spinner:{
  alignSelf: 'center',
  marginVertical: 50,
},
});
  
export default withNavigation(Favorites);
  