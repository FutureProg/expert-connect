import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

import Oscar from '../images/oscar.jpeg';
import Emily from '../images/emily.jpeg';
import Stars from '../images/stars.png';
import AvailableCir from '../images/AvailableCirc.png';

import Phone from '../images/phone.png';
import Message from '../images/message.png';

class ExpertList extends React.Component{
	static navigationOptions = {
		title: 'Expert Connect'
	}

	render(){
		return (
			<View style={styles.container}>
				<ExpertCard navigate={this.props.navigation.navigate} image={Oscar} name="Oscar" bio="Auto mechanic for 20 years" />
				<ExpertCard navigate={this.props.navigation.navigate} image={Emily} name="Emily" bio="Car fanatic\nRestores old vehicles in spare time" />
			</View>
		);
	}

}

class ExpertCard extends React.Component{
	render(){
		const nextPage = ()=>{
			this.props.navigate('messaging');
		}
		return (
			<View style={styles.expertCard}>
				<View style={styles.cardTop}>
					<View style={styles.cardImageContainer}>
						<Image style={styles.cardImage} source={this.props.image}/>
					</View>
					<View style={styles.cardBio}>
						<Text style={{fontWeight:"600"}}>{this.props.name}</Text>
						<Text>{this.props.bio}</Text>
						<Image style={{width: '70%',resizeMode:'contain',marginTop: 30}} source={Stars}/>
					</View>
					<View style={{position:'absolute',top:10,right:10,flexDirection:'row',flex:1,justifyContent:'center'}}>
						<Image style={{width:10,height:10,marginRight:5,marginTop:5}} source={AvailableCir} />
						<Text>Available</Text>
					</View>
				</View>
				<View style={styles.cardBottom}>
					<TouchableOpacity style={[styles.cardBottomSection,{borderRightColor:'rgba(151,151,151,0.27)',borderRightWidth:2}]}>	
						<Image style={{height:'90%',resizeMode:'contain'}} source={Phone} />
						<Text>Phone</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cardBottomSection} onPress={nextPage}>	
						<Image style={{height:'90%',resizeMode:'contain'}} source={Message} />
						<Text>Message</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,    
	  flexDirection: 'column',        
	  backgroundColor:"#fff",	   
	},
	expertCard:{
		backgroundColor: 'white',
		borderRadius: 5,
		height: 200,
		margin: 10,
		elevation: 5
	},
	cardTop:{
		position: 'relative',
		flex: 3,
		flexDirection: 'row',
		marginHorizontal: 5,
		padding: 10,
		borderBottomColor: 'rgba(151,151,151,0.27)',
		borderBottomWidth: 2
	},
	cardImageContainer:{
		flex: 1,	
		justifyContent: 'center'		
	},
	cardImage:{
		width: 100,
		height: 100,		
		resizeMode: 'cover'
	},
	cardBio:{
		flex: 2,
		paddingLeft: 10,
		paddingTop: 15	
	},
	cardBottom:{
		flex: 1,
		flexDirection: 'row'
	},
	cardBottomSection:{
		flex: 1,
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center',
		paddingHorizontal: 30,
		paddingVertical:10
	}
});

export default ExpertList;