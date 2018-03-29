import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import GridView from 'react-native-super-grid';

import Cars from '../images/Cars.png';
import Shoes from '../images/Shoes.png';
import Instruments from '../images/Instruments.png';
import PCParts from '../images/PCParts.png';
import Arrow from '../images/arrow.png';

const gridSize = 166;
const gridPadding = 1;

class Categories extends React.Component{

	static navigationOptions = {
		title: 'Expert Connect',
		headerLeft:null		
	};

	render(){
		const items = [
			{text:"Cars",image:Cars},
			{text:"Shoes",image:Shoes},
			{text:"Musical\nInstruments",image:Instruments},
			{text:"PC Parts",image:PCParts}
		];
		const nextPage = ()=>{
			this.props.navigation.navigate('expertlist');
		}

		return (
			<View style={styles.container}>
				<Text style={styles.promptText}>Get expert advice on</Text>
				<GridView
					itemDimension={gridSize-20}
					items={items}
					style={styles.grid}					
					renderItem={item=>(
						<TouchableOpacity style={styles.itemContainer} onPress={nextPage}>
							<Image style={styles.itemImage} source={item.image}/>							
							<View style={styles.itemLabelContainer}>
								<Text style={styles.itemLabel}>{item.text}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
				<TouchableOpacity style={styles.otherButton}>
					<Text style={{fontWeight: '500'}}>Other</Text>
					<Image source={Arrow} style={{position:'absolute',right:10,height:30,resizeMode:Image.resizeMode.contain}}/>
				</TouchableOpacity>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
	  flex: 9,    
	  flexDirection: 'column',        
	  backgroundColor:"#fff",	   
	},
	promptText:{
		fontWeight: '500',
		textAlign:'center',
		marginTop: 20
	},	
	otherButton:{		
		position: 'relative',
		height: 40,
		width: '90%',
		marginHorizontal: '5%',
		elevation: 2,
		backgroundColor: 'white',	
		borderRadius: 15,
		marginBottom: '25%',
		justifyContent: 'center',
		paddingLeft: 20
	},	
	grid:{
		flex:1,		
		paddingTop:25				
	},
	itemContainer:{	
		position: 'relative',
		justifyContent:'flex-end',
		padding: gridPadding,
	},
	itemImage:{
		width: gridSize,
		height: gridSize,
		resizeMode: 'cover'
	},
	itemLabelContainer:{
		position: 'absolute',		
		width: gridSize,
		height: gridSize,
		top: gridPadding,
		left: gridPadding,
		alignItems:'center',
		justifyContent: 'center',		
		paddingTop: 10		
	},
	itemLabel:{				
		fontWeight: '500',
		fontSize: 20,
		color: 'white',
		textAlign:'center'
	}
});

export default Categories;