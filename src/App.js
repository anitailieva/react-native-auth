import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 	'./components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {

	componentWillMount() {
	firebase.initializeApp({
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
				<LoginForm />
			</View>
		);
	}
}

export default App;
