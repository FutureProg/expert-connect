import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Emily from '../images/emily.jpeg';

class Messaging extends React.Component{

	static navigationOptions = {
		title: 'Expert Connect'
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
		const sendMessage = (messages = [])=>{
			this.setState({
				messages: GiftedChat.append(this.state.messages,messages)
			});			
			setTimeout(()=>{
				this.setState({
					messages: GiftedChat.append(this.state.messages,[{
						_id:1,
						text:'Hey there! Let me see what I can do to help you :)',
						createdAt: new Date(),
						user:{
							_id: 2,
							name: 'Emily',
							avatar: Emily
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