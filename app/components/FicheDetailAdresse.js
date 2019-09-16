import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BoutonLocalisationSmall from './BoutonLocalisationSmall';




export default class FicheDetailAdresse extends Component {
  constructor (props) {
    super(props);
  }
	
	render() {
    let item = this.props.element;
		return (
    <View style={styles.contentContainer}>
    <Text h2 style={styles.titreAdresse}>{item.type}</Text>
    <Text style={styles.adresse}>{item.adresse}{"\n"}{item.codepostal} {item.ville}</Text>
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
  marginTop:100,
  marginLeft:90
  },
  adresse:{
    margin:30,
    marginLeft:90

  }

});
