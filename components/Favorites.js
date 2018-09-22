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
            mainData:[],
            keys:[],
            recipe: 'Testing',
            loaded: false,
            loading: true
        }
      }
     
componentDidMount = () => {
const { currentUser } = firebase.auth();
this.setState({loading: true})
    firebase.database().ref(`/users/${currentUser.uid}/favorites/`)
    .on('value', snapshot => {
    var obj = snapshot.val()
    var mainData = []
    var keys = []
    for(let a in obj){
        mainData.push(obj[a])
        keys.push(a)
    }
    this.setState({
        userfav : snapshot.val(),
        mainData:mainData,
        keys:keys,
        loaded: true,
        loading: false,
    })
    });
}

    
    render() {
        const { navigate } = this.props.navigation;
      return (
        <View style={s.container}>

        {this.state.loaded ?
         <FlatList
          data={this.state.mainData}
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
    backgroundColor: '#F0F0F0',
    flex: 1,
    paddingVertical: 15
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
    marginBottom: 7.5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 25
},

});
  
export default withNavigation(Favorites);
  