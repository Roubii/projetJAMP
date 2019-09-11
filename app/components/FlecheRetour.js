import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'




export default class FlecheRetour extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
     <View >
       <Icon name='arrow-drop-up' />   
     </View>
		)
	}
}


const styles = StyleSheet.create({
	

});



