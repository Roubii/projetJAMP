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
       <TouchableOpacity>
         <Image source={require('../img/BOUTONS/close.png')} style={styles.image} />
       </TouchableOpacity>
		)
	}
}


const styles = StyleSheet.create({
	
  image:{
    width:30,
    height:30,
    resizeMode:'contain',
  }
});



