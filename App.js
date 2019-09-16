import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Router from './app/routes/Router';
import Container from './app/components/Container';

export default class App extends Component {
	render() {
		return (
		<View style={styles.container}>

			<Router />
	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

		/*	<Container>
			<card> </card>
		</Container>
		);
	}
} */
