import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DescriptionFicheDetail from './DescriptionFicheDetail';
import FicheDetailAdresse from './FicheDetailAdresse';




export default class FicheDetail extends Component {
  	constructor (props) {
      super(props);
    }
	render() {
		return (
			<View style={styles.container}>
        
          <View style={styles.PopupContainer}>
         
           <DescriptionFicheDetail element={this.props.element} retour={this.props.close}/>
           <View style={styles.divider}></View>
       
           <FicheDetailAdresse element={this.props.element}/>
        
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
    backgroundColor: 'white',
  },
	PopupContainer: {
    flex: 1,
		width: '80%',
		height:'100%',
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 20,
    flexDirection:'row'	
  },
  divider :{
    width:1,
    height: '50%',
    borderRightWidth: 2,
    borderRightColor: 'rgb(224, 224, 224)',
    padding:20,
  }
	
});
