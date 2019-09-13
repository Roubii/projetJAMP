import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Filiales from './Filiales';
import DescriptionFicheDetail from './DescriptionFicheDetail';
import FicheDetailAdresse from './FicheDetailAdresse';




export default class FicheDetail extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
			<View style={styles.container}>
        
          <View style={styles.PopupContainer}>
         
           <DescriptionFicheDetail retour={this.props.close}/>
           <View style={styles.divider}></View>
       
           <FicheDetailAdresse/>
        
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
		width: 800,
		height:450,
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
