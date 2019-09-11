import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Recherche from './Recherche.js';

export default class Entete extends Component {

render() {
 
    return (
      <View style={styles.container}>
       <View style={styles.RectangleShapeView} >
         <TouchableOpacity onPress={this.props.home}><Image source={require('../img/logoouestfrance.png')} style={styles.Image} /></TouchableOpacity>
            <View style={{ width: 350, marginRight: 50, flexDirection: "row"}}>
              <View  style={{ width: 300, }}>
                <Recherche style={styles.Recherche} />
              </View>
              <TouchableOpacity onPress={this.props.map}><Image source={require('../img/Iconloca/iconRouge.png')} style={styles.logoRouge}/></TouchableOpacity>
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
   width:150,
   height:60,
   resizeMode:"cover",
   marginLeft:30,
 },
recherche: {
  borderRadius: 4
},

logoRouge: {
  width: 60,
  height:60,
  flexDirection:'row',
  resizeMode:"contain",
  marginRight:50,
}


});

 
