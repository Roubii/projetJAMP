import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PLACES from '../consts/Places';

export default class Annotations extends Component {
  constructor(){
    super();
    this.state = {
      items : PLACES,
    }
  }
  render (){
    let items = this.state.items
  return (
    <View>
      {items.map((item,k) => 
    <Mapbox.PointAnnotation
    key={k}
    id={'PointAnnotation'+k}
    coordinate={item.coordonnees}>
    <View style={styles.annotationContainer}>
      <View style={styles.annotationFill} />
    </View>
    <Mapbox.Callout title={item.societe+'\n'+item.type+'\n'+item.adresse+'\n'+item.codepostal+' '+item.ville} />
    </Mapbox.PointAnnotation>
      )}
  </View>
  )}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		height: 400,
		marginTop: 80
	},
	annotationContainer: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 15
	},
	annotationFill: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'blue',
		transform: [{ scale: 0.6 }]
	}
});