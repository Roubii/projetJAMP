import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Entete from './app/components/Entete';
import Map from './app/components/Map';
import FicheDetail from './app/components/FicheDetail'
import SearchableList from './app/src/SearchableList';


export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>

			<Entete/>
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <SearchableList />
  </SafeAreaView>
	
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
