import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import BoutonLocalisation from './BoutonLocalisation';




export default class Description extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
      <View style={styles.descriptifContainer}>
            <Image style={styles.image}source={require('../img/Additi-logo.gif')} />
            <Text h1 style={styles.titre}>Additi</Text>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
              <Text style={styles.paragraphe}>ADDITI regroupe les savoir-faire de Précom et de ses filiales, et celles de Ouest-France Multimédia, spécialiste des marchés d’annonces en ligne. A chaque besoin en communication de proximité, ADDITI propose aux annonceurs une offre publicitaire unique, basée sur des médias puissants et des solutions digitales ciblées.
                Au plus près de leur marché, leurs équipes accompagnent le développement des acteurs locaux grâce à des solutions publicitaires et marketing efficaces pour répondre à la diversité des enjeux : trafic, référencement, visibilité, image de marque...
              </Text>
              </ScrollView>
              <BoutonLocalisation/>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	
  descriptifContainer: {
    flex:7,
    width: 400,
    marginLeft:100,
    marginTop:50
  },
  titre: {
    fontSize: 20,
    marginBottom:20,
    marginTop:20
  },
  paragraphe:{
    textAlign :'justify',
    marginRight:40,
    marginTop:20,
    lineHeight:20
 
  },
  image:{
    width:250,
    height:100,
    resizeMode:'contain',
    marginLeft:-50
  }
});
