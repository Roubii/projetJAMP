import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default class BoutonClose extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
     <View >
       <TouchableOpacity>
         <Image source={require('../img/BOUTONS/close.png')} style={styles.image} />
       </TouchableOpacity>   
     </View>
		)
	}
}


const styles = StyleSheet.create({
	
  image:{
    width:30,
    height:30,
    resizeMode:'contain',
    position:'absolute',
    top:-220,
    right:20,
  }
});



