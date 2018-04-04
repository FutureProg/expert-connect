import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

import CategoriesScreen from './screens/categories';
import ExpertList from './screens/expertlist';
import Messaging from './screens/messaging';
import Rating from './screens/rating';

import BGImage from './images/home_bg.png';

import Logo from './images/Logo.png';

class WelcomeScreen extends React.Component{

  static navigationOptions = {header:null};

  render(){
    const nextPage = ()=>{
      this.props.navigation.navigate('categories');
    }

    return (
      <View style={styles.container}>
        <View style={{flex:0.6}}/>
        <View style={styles.content}> 
          {/* 
          <TouchableOpacity onPress={()=>{}}>
            <View style={styles.buttons}>
              <Text style={{color:'black'}}>LOGIN</Text>
            </View>
          </TouchableOpacity>             
           */}
          <Image source={Logo} style={{marginBottom:50}}/>                    
          <TouchableOpacity onPress={nextPage} style={{marginTop:30,backgroundColor:'white',elevation:2,width: 100,padding: 10}}>
						<Text style={{fontWeight:'500',color:'black',textAlign:'center'}}>Login</Text>
					</TouchableOpacity>
          <TouchableOpacity onPress={nextPage} style={{marginTop:30,backgroundColor:'white',elevation:2,width: 100,padding: 10}}>
						<Text style={{fontWeight:'500',color:'black',textAlign:'center'}}>Sign up</Text>
					</TouchableOpacity>                
        </View>
        <View style={{flex:0.6}}/>
        <Image source={BGImage} style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',resizeMode:'cover',zIndex:-1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    flexDirection: 'column',        
    backgroundColor:"#fff"
  },
  content:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  buttons:{
    marginBottom: 20,
    elevation: 3,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,    
  }
})

export default StackNavigator({
  welcome:{
    screen: WelcomeScreen,    
  },
  categories:{
    screen: CategoriesScreen,
    header: {
      left: null,
    }
  },
  expertlist:{
    screen: ExpertList
  },
  messaging:{
    screen: Messaging
  },
  rating:{
    screen: Rating
  }
},
{
  initialRouteName: 'welcome',
  navigationOptions:{
    headerTintColor: "white",
    headerStyle: { backgroundColor: '#39B1FF'},
  } 
}
);

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
