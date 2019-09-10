import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';



export default class Filiales extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
<View style={styles.contentContainer}>
    <ScrollView  >
      <TouchableOpacity><Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} /></TouchableOpacity>
      <TouchableOpacity><Image style={styles.image}source={require('../img/PRECOM/logo-500x172_precom-alimentation.jpg')} /></TouchableOpacity>
      <TouchableOpacity><Image style={styles.image}source={require('../img/REGIE-RADIOS-REGION/logo-500x172_cocktail-fm.jpg')} /></TouchableOpacity>
      <TouchableOpacity><Image style={styles.image}source={require('../img/logo-500x172_adrexo.jpg')} /></TouchableOpacity>
      <TouchableOpacity><Image style={styles.image}source={require('../img/JOURNAUX-DE-LOIRE/logo-500x172_courrier-de-l-ouest.jpg')} /></TouchableOpacity>
    </ScrollView>
    </View>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer:{
  height:350
  },
  image:{
    width:250,
    resizeMode:'contain',
    marginLeft:20
  }
});
