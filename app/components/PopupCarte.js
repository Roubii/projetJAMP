import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FicheDetail from './FicheDetail';


export default class PopupCarte extends Component {
  constructor(){
    super();
    this.state = {
      page : 'carte',
    }
  }

  render () {
    let item = this.props.donnees;
    return(
      (this.state.page === 'carte') ?
      <View style={styles.container}>
        <Text style={styles.societe}>{item.societe}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text>{item.adresse}</Text>
        <Text>{item.codepostal} {item.ville.toUpperCase()}</Text>
        <TouchableOpacity onPress={() => this.setState({page:'detail'})}><Text style={styles.info}>Plus d'infos...</Text></TouchableOpacity>
      </View>
      :
      <View>
      <FicheDetail style={styles.fiche}/>
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
  },
  fiche: {
    position:'absolute',
    top:10
  }
});