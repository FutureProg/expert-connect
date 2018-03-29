import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';

import Oscar from '../images/oscar.jpeg';
import Stars from '../images/stars.png';
import AvailableCir from '../images/AvailableCirc.png';

class ExpertList extends React.Component{

	render(){
		return (
			<View style={styles.container}>
				<ExpertCard name="Oscar" bio="Auto mechanic for 20 years" />
			</View>
		);
	}

}

class ExpertCard extends React.Component{
	render(){
		return (
			<View style={styles.expertCard}>
				<View style={styles.cardTop}>
					<View style={styles.cardImageContainer}>
						<Image style={styles.cardImage} source={Oscar}/>
					</View>
					<View style={styles.cardBio}>
						<Text style={{fontWeight:"600"}}>{this.props.name}</Text>
						<Text>{this.props.bio}</Text>
						<Image style={{width: '70%',resizeMode:'contain',marginTop: 30}} source={Stars}/>
					</View>
					<View style={{position:'absolute',top:10,right:10}}>

					</View>
				</View>
				<View style={styles.cardBottom}>

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
		flex: 1
	}
});

export default ExpertList;