import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Entete from './app/components/Entete';
import Map from './app/components/Map';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>

			<Entete/>
			<Map/>
	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
