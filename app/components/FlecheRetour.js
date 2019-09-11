import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';




export default class FlecheRetour extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
     <View >
       <Icon style={styles.icon} name='arrowleft' color='#E2001A' size={35}/> 
     </View>
		)
	}
}


const styles = StyleSheet.create({
  icon:{
    marginBottom:40
  }
});



