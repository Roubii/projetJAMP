import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PopupCarte from './PopupCarte';



export default class Annotations extends Component {

  render(){

    let items = this.props.data

     return (

      // Génération des points sur la carte en fonction du tableau de données
      
      <View style={styles.container}>
          {items.map((item,k) => 
        <Mapbox.PointAnnotation
          key={k}
          id={'PointAnnotation'+k}
          coordinate={item.coordonnees}>
            <Mapbox.Callout>
              <PopupCarte sendAdresse={this.props.sendAdresse} donnees={item}/>
            </Mapbox.Callout>
        </Mapbox.PointAnnotation>
        )}
      </View>

  )}
}

const styles = StyleSheet.create({

	container:{
		flex: 1
  },
  fiche:{
    width:400
  }
});