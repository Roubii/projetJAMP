import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PLACES from '../consts/Places';

const Detail = (props) => {

  return (

    <Mapbox.PointAnnotation
    key="pointAnnotation"
    id="pointAnnotation"
    coordinate={[-1.6777926, 48.117266]}>
    <View style={styles.annotationContainer}>
      <View style={styles.annotationFill} />
    </View>
    <Mapbox.Callout title="An annotation here!" />
    </Mapbox.PointAnnotation>

  )
}

export default Detail;