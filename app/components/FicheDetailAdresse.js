import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BoutonLocalisationSmall from './BoutonLocalisationSmall';
import FlecheRetour from './FlecheRetour';




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
    </View>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer:{
  height:'100%',
  width:'40%',
  alignItems:'center'
  },
  titreAdresse:{
  fontSize:20,
  marginTop:'35%'
  },
  close: {
    color: '#E2001A',
    fontSize:15,
    textDecorationLine:'underline',
  }

});
