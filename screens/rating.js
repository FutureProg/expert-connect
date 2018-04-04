import React from 'react';
import {View, Text,Image, StyleSheet,Button,TouchableOpacity,TouchableHighlight} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Emily from '../images/emily.jpeg';
import Oscar from '../images/oscar.jpeg';

import StarGold from '../images/star_gold.png';
import StarGray from '../images/star_gray.png';

class Rating extends React.Component{

	static navigationOptions = {
		title: "Feedback",
		headerLeft:null	
	}

	render(){
		const finished = ()=>{
			NavigationActions.reset({
				index: 0,
				key: null,
				actions: [
					NavigationActions.navigate({ routeName: 'categories' })
				]
			})
		};
		const { params } = this.props.navigation.state;

		return (
			<View style={styles.container}>
				<View style={{flex:2,alignItems:'center',paddingTop:30}}>
					<Image style={{width: 200,height:200, resizeMode:'cover'}} source={params.image}/>
				</View>
				<View style={{flex:3,alignItems:'center'}}>
					<Text style={{marginTop:40,fontSize:20,textAlign:'center',fontWeight:"500"}}>Rate your conversation with {params.name}</Text>
					<Stars/>					
					<TouchableOpacity onPress={()=>{ this.props.navigation.dispatch(finished)}} style={{marginTop:30,backgroundColor:'white',elevation:2,width: 100,padding: 10}}>
						<Text style={{fontWeight:'500',color:'black',textAlign:'center'}}>Continue</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

}

class Stars extends React.Component{

	componentWillMount(){
		this.setState({
			rating: 1
		});
	}

	render(){
		const starStyle = {
			width: 60,
			height: 60,
			resizeMode: 'contain'
		};
		const stars = [1,2,3,4].map((item,index)=>{
			const callback = ()=>this.setState({rating:item});
			return (
				<TouchableOpacity onPress={callback} key={index} style={{height:60,width:60,marginHorizontal:5}}>
					<Image source={this.state.rating >= index+1? StarGold : StarGray} style={starStyle} />
				</TouchableOpacity>
			)
		});
		return (
			<View style={{flexDirection:'row',marginTop:5}}>
				{stars}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex: 1,

	}
})

export default Rating;