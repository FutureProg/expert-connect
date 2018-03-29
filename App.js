import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

import CategoriesScreen from './screens/categories';
import ExpertList from './screens/expertlist';

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
          <Button title="LOGIN" onPress={nextPage}/>                    
          <Button title="SIGNUP" onPress={nextPage}/>                    
        </View>
        <View style={{flex:0.6}}/>
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
  }
},
{
  initialRouteName: 'expertlist',
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
