import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import FlecheRetour from './FlecheRetour';





export default class DescriptionFicheDetail extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
    let item = this.props.element;
		return (
      <View style={styles.descriptifContainer}>
            <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
            <Text h1 style={styles.titre}>{item.societe}</Text>
            <Text>{item.dirigeantPrenom} {item.dirigeant}</Text>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
              <Text style={styles.paragraphe}>{item.description}</Text>
              </ScrollView>
              <FlecheRetour retour={this.props.retour}/>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	
  descriptifContainer: {
    flex:7,
    width: 400,
    marginLeft:40,
    marginTop:40
  },
  titre: {
    fontSize: 20,
    marginBottom:20
  },
  paragraphe:{
    textAlign :'justify',
    marginBottom :10,
 
  },
  image:{
    width:250,
    height:100,
    resizeMode:'cover',
    

  }
});
