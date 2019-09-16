import React, {Component} from  'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';

export default class Home extends Component {
  render () {
    return(
      
      <View style={styles.main}>
        <Text style={styles.texte}>Les différents groupes appartenant à SIPA Ouest-France :</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator>
          <View style={styles.blocLogo}>
          <TouchableOpacity style={styles.containertouchable} onPress={this.props.OuestFrance}><Image source={require('../img/logo-500x172_OF_Rouge.jpg')} style={styles.logo}/></TouchableOpacity>
          <TouchableOpacity style={styles.containertouchable} onPress={this.props.Additi}><Image source={require('../img/Additi-logo.gif')} style={styles.logo}/></TouchableOpacity>          
          <TouchableOpacity style={styles.containertouchable} onPress={this.props.OuestFrance}><Image source={require('../img/logo-500x172_OF_Rouge.jpg')} style={styles.logo}/></TouchableOpacity>
          <TouchableOpacity style={styles.containertouchable} onPress={this.props.Additi}><Image source={require('../img/Additi-logo.gif')} style={styles.logo}/></TouchableOpacity>      
          <TouchableOpacity style={styles.containertouchable} onPress={this.props.OuestFrance}><Image source={require('../img/logo-500x172_OF_Rouge.jpg')} style={styles.logo}/></TouchableOpacity>
          <TouchableOpacity style={styles.containertouchable} onPress={this.props.Additi}><Image source={require('../img/Additi-logo.gif')} style={styles.logo}/></TouchableOpacity>      
          </View>
        </ScrollView>
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
    alignItems:'center',
   
  },
  logo:{
    width:400,
    resizeMode:'cover',
  },
  texte: {
    fontSize:30,
    textAlign:'center',
    padding:30,
  },
  containertouchable:{
    height:150,
    marginBottom:'5%',
   
  }
})