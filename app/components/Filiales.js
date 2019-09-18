import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';



const Filiales = (props) => {
    if (props.group === 'additi'){
		return (
      <View style={styles.contentContainer}>
        <ScrollView >
          <Image style={styles.image}source={require('../img/PRECOM/logo-500x172_precom-alimentation.jpg')} />
          <Image style={styles.image}source={require('../img/REGIE-RADIOS-REGION/logo-500x172_cocktail-fm.jpg')} />
          <Image style={styles.image}source={require('../img/Medialex.png')} />
          <Image style={styles.image}source={require('../img/Happy Prod.png')} />
          <Image style={styles.image}source={require('../img/Precontact.png')} />
          <Image style={styles.image}source={require('../img/logo-500x172_ouest-france-multimedia.jpg')} />
          <Image style={styles.image}source={require('../img/nantesMedia.png')} />
          <Image style={styles.image}source={require('../img/Dans_nos_cœurs.jpg')} />
          <Image style={styles.image}source={require('../img/Affiouest.jpg')} />
        </ScrollView>
      </View>

		);
	} else if(props.group === 'ouestfrance') {
    return (
      <View style={styles.contentContainer}>
        <ScrollView >
          <Image style={styles.image}source={require('../img/logo-500x172_OF_Rouge.jpg')} />
          <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
          <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_le-marin.jpg')} />
          <Image style={styles.image}source={require('../img/logo-pdm.png')} />
          <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
          <Image style={styles.image}source={require('../img/logo-500x172_voiles-et-voiliers.jpg')} />
          <Image style={styles.image}source={require('../img/logo-500x172_editions-ouest-france.jpg')} />
        </ScrollView>
      </View>
      );
  }
}

export default Filiales;

const styles = StyleSheet.create({
	contentContainer:{
  height:'80%',
 
  },
  image:{
    width:250,
    resizeMode:'contain',
    marginLeft:20,
    marginRight:100
  }
});
