import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default class Entete extends Component {

render() {
 
    return (
      <View style={styles.container}>
       <View style={styles.RectangleShapeView} >
         <Image source={require('../img/logoouestfrance.png')} style={styles.Image} />
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  container: {
    
    backgroundColor: '#F5FCFF',
  },
 
  RectangleShapeView: {
 
 
  width: 961 ,
  height: 65,
  backgroundColor: '#fff',
  borderBottomColor: 'grey',
  borderBottomWidth: 2,


 },

 Image: {
   width:130,
   height:60,
   resizeMode:"contain",

 }

});

 
