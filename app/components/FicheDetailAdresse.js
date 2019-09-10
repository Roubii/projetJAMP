import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BoutonLocalisationSmall from './BoutonLocalisationSmall';




export default class FicheDetailAdresse extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
    <View style={styles.contentContainer}>
    <Text h2 style={styles.titreAdresse}>Rédaction</Text>
    <Text style={styles.adresse}>13 rue du Breil {"\n"}35063 RENNES</Text>
    <BoutonLocalisationSmall/>
    </View>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer:{
  height:350,
  },
  titreAdresse:{
  fontSize:20,
  marginTop:60,
  marginLeft:30
  },
  adresse:{
    margin:30

  }

});
