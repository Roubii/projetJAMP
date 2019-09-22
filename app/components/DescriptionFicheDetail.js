import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';


// Affichage des détails d'une entreprise à partir de la carte
// Cible l'élément sélectionné à partir du Callout d'Annotations

export default class DescriptionFicheDetail extends Component {
  
	render() {

    let item = this.props.element;

		return (

      <View style={styles.descriptifContainer}>
            <Image style={styles.image} source={item.logo} />
            <Text h1 style={styles.titre}>{item.societe}</Text>
            <Text style={{marginBottom:5}}>Dirigeant : {item.dirigeantPrenom} {item.dirigeant}</Text>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
              <Text style={styles.paragraphe}>{item.description}</Text>
            </ScrollView>
        </View>
        
		);
	}
}

const styles = StyleSheet.create({
	
  descriptifContainer: {
    flex:7,
    width: '50%',
    marginLeft:40,
    marginTop:10
  },
  titre: {
    fontSize: 20,
    marginBottom:10
  },
  paragraphe:{
    textAlign :'justify',
    marginBottom :5,
  },
  image:{
    width:200,
    height:80,
    resizeMode:'cover',
    marginTop:-50
  }
});
