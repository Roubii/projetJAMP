import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';



export default class BoutonLocalisation extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
     <View >
       <TouchableOpacity style={styles.touchable}>
        <Text style={styles.text}>Localiser l'ensemble des sociétés</Text>
       </TouchableOpacity>   
     </View>
		)
	}
}


const styles = StyleSheet.create({
	
  touchable:{
    width:400,
    height:44,
    borderRadius:3,
    backgroundColor: '#E2001A',
    margin:10,
    marginTop:20,
    marginBottom:30,
    justifyContent:'center',
   alignItems:'center'
  },
  text:{
    fontSize: 16,
    color:'white',
    fontWeight:'bold'
  }
});
