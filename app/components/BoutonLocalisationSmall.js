import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';



export default class BoutonLocalisationSmall extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
     <View >
       <TouchableOpacity style={styles.touchable}>
        <Text style={styles.text}>Localiser sur la carte</Text>
       </TouchableOpacity>   
     </View>
		)
	}
}


const styles = StyleSheet.create({
	
  touchable:{
    width:200,
    height:44,
    borderRadius:3,
    backgroundColor: '#E2001A',
    margin:10,
    marginLeft:40,
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
