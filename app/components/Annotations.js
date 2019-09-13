import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PLACES from '../consts/Places';
import PopupCarte from './PopupCarte';
import FicheDetail from './FicheDetail';

export default class Annotations extends Component {
  constructor(){
    super();
    this.state = {
      items : PLACES,
      page : 'carte'
    }
  }
  render (){
    let items = this.state.items
  return (

    (this.state.page === 'carte') ?
    <View style={styles.container}>
      {items.map((item,k) => 
    <Mapbox.PointAnnotation
    key={k}
    id={'PointAnnotation'+k}
    coordinate={item.coordonnees}>
    <Mapbox.Callout>
      <PopupCarte donnees={item} info={() => this.setState({page:'detail'})}/>
    </Mapbox.Callout>
    </Mapbox.PointAnnotation>
    )}
  </View>
  :
  <View style={styles.container}>
    <FicheDetail style={styles.fiche}/>
  </View>
  )}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
  },
  fiche: {
    width:400
  }
});