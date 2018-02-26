import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 	'./components/common/Header';

class App extends Component {

	componentWillMount() {
	firebase.initiliazeApp({
    apiKey: 'AIzaSyCsbrFyRxWQkEGEzqirib4Iq7D2pNV6i6w',
    authDomain: 'authentication-251ea.firebaseapp.com',
    databaseURL: 'https://authentication-251ea.firebaseio.com',
    projectId: 'authentication-251ea',
    storageBucket: 'authentication-251ea.appspot.com',
    messagingSenderId: '1038159040112'
 });
}
	render() {
		return (
			<View>
				<Header headerText='Authentication' />
				<Text>An app</Text>
			</View>
		);
	}
}

export default App;
