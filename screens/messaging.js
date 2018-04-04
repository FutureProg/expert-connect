import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Emily from '../images/emily.jpeg';
import Oscar from '../images/oscar.jpeg';

class Messaging extends React.Component{	

	static navigationOptions = ({navigation})=>{
		const { params } = navigation.state;
		return {
			title: 'Expert Connect',
			headerRight:(
				<TouchableOpacity
					onPress={()=>navigation.navigate("rating",{...params})} style={{paddingRight:20}}>
					<Text style={{color:'white',fontWeight:'500'}}>Finished</Text>
				</TouchableOpacity>
			)
		}
	}

	componentWillMount(){
		this.setState({
			messages: [{
				_id:2,
				text: 'Got a question?',
				createdAt: new Date(),
				system: true
			}]
		});
	}

	render(){		
		const { params } = this.props.navigation.state;

		const sendMessage = (messages = [])=>{
			this.setState({
				messages: GiftedChat.append(this.state.messages,messages)
			});			
			setTimeout(()=>{
				this.setState({
					messages: GiftedChat.append(this.state.messages,[{
						_id:1,
						text:'Hey there! Let me see what I can do to help you 😄',
						createdAt: new Date(),
						user:{
							_id: 2,
							name: params.name,
							avatar: params.image
						}
					}])
				});
			},1000);
		};

		return (
			<View style={styles.container}>
				<GiftedChat
				messages={this.state.messages}
				user={{_id:1}}
				onSend={sendMessage}
				isAnimated={true}
				isLoadingEarlier={true}
				/>		
				<KeyboardSpacer/>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,    
	  flexDirection: 'column',        
	  backgroundColor:"#fff",	   
	}
});

export default Messaging;