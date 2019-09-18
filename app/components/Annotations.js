import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PLACES from '../consts/Places';
import PopupCarte from './PopupCarte';

export default class Annotations extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render (){
    let items = this.props.data
  return (

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
	container: {
		flex: 1
  },
  fiche: {
    width:400
  }
});