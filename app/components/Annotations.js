import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PLACES from '../consts/Places';
import PopupCarte from './PopupCarte';

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
    <Mapbox.Callout>
      <PopupCarte donnees={item} info={this.props.popup}/>
    </Mapbox.Callout>
    </Mapbox.PointAnnotation>)}
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
  },
  infoText:{
    textAlign:'left',

  }
});