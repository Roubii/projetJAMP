import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Description from './Description';



export default class Popup extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
			<View style={styles.container}>
        <View style={styles.PopupContainer}>
          <Description/>
        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'grey',

  },
  
	PopupContainer: {
		width: 800,
		height:450,
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 20
		
	}
	
});
