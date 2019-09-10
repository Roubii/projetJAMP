import React, {Component} from  'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  render () {
    return(
      
      <View style={styles.main}>
        <Text style={styles.texte}>Les différents groupes appartenant à SIPA Ouest-France :</Text>
        <View style={styles.blocLogo}>
          <TouchableOpacity onPress={this.props.OuestFrance}><Image source={require('../img/logo-500x172_OF_Rouge.jpg')} style={styles.logo}/></TouchableOpacity>
          <TouchableOpacity onPress={this.props.Additi}><Image source={require('../img/Additi-logo.gif')} style={styles.logo}/></TouchableOpacity>          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor:'white',
  },
  blocLogo:{  
    flex:1,  
    width:'100%',
    justifyContent:'space-around',
    flexDirection:'row',
    padding:20,
  },
  logo:{
    width:400,
    resizeMode:'contain',
  },
  texte: {
    fontSize:22,
    textAlign:'center',
    padding:20,
  },
})