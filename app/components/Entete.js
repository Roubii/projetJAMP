import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Recherche from './Recherche.js';

export default class Entete extends Component {

render() {
 
    return (
      <View style={styles.container}>
       <View style={styles.RectangleShapeView} >
         <Image source={require('../img/logoouestfrance.png')} style={styles.Image} />
         <View style={{ width: 300, marginRight: 125}}>
          <Recherche style={styles.Recherche} />
         </View>

      </View>

      </View> 
    );
  }
}
const styles = StyleSheet.create({
 
  container: {
    
    backgroundColor: '#F5FCFF',
    flexDirection:'row',
  },
 
  RectangleShapeView: {
 
 
  width: '100%' ,
  height: 65,
  backgroundColor: '#fff',
  borderBottomColor: 'grey',
  borderBottomWidth: 2,
  flexDirection: 'row', 
  justifyContent: 'space-between'


 },

 Image: {
   width:130,
   height:60,
   resizeMode:"contain",

 },
recherche: {
  borderRadius: 4,
  
}

});

 
