import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default class PopupCarte extends Component {
  render () {
    return(
      
      <View style={styles.container}>
        <Text style={styles.societe}>{this.props.societe}</Text>
        <Text style={styles.type}>{this.props.type}</Text>
        <Text>{this.props.adresse}</Text>
        <Text>{this.props.codepostal} {this.props.ville}</Text>
        <TouchableOpacity onPress={this.props.info}><Text style={styles.info}>Plus d'infos...</Text></TouchableOpacity>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor:'#fff',
    padding:8,
    borderRadius:5,
    width:250,
    height:120
	},
  societe: {
    fontSize:15,
    textDecorationLine:'underline',
    fontWeight:'bold',
  },
  type: {
    marginBottom:2,
  },
  info : {
    color:'blue',
    textAlign:'right'
  }
});