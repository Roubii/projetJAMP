import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import BoutonClose from './BoutonClose';




export default class ResultatRecherche extends Component {
  	constructor (props) {
      super(props);
    }
	render() {
    let item = this.props.element;
		return (
			<View style={styles.container}>
        <BoutonClose close={this.props.close} style={{width:40, height:40}}/>
          <View style={styles.PopupContainer}>
         
          <View style={styles.descriptifContainer}>
            <Image style={styles.image} source={item.logo} />
            <Text h1 style={styles.titre}>{item.societe}</Text>
            <Text style={{marginBottom:5}}>Dirigeant : {item.dirigeantPrenom} {item.dirigeant}</Text>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
              <Text style={styles.paragraphe}>{item.description}</Text>
              </ScrollView>
          </View>
          
           <View style={styles.divider}></View>
       
            <View style={styles.contentContainer}>
              <Text h2 style={styles.titreAdresse}>{item.type}</Text>
              <Text style={styles.adresse}>{item.adresse}{"\n"}{item.codepostal} {item.ville}</Text>
            </View>
           
        
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
		width: '100%',
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
    height: '40%',
    borderRightWidth: 2,
    borderRightColor: 'rgb(224, 224, 224)',
    padding:15,
  },
  descriptifContainer: {
    flex:7,
    width: '50%',
    marginLeft:40,
    marginTop:10
  },
  titre: {
    fontSize: 20,
    marginBottom:10
  },
  paragraphe:{
    textAlign :'justify',
    marginBottom :5, 
  },
  image:{
    width:200,
    height:80,
    resizeMode:'cover',
    marginTop:-30
  },
  contentContainer:{
    height:'100%',
    width:'40%',
    alignItems:'center',
    },
    titreAdresse:{
    fontSize:20,
    marginTop:'35%'
    },
    close: {
      color: '#E2001A',
      fontSize:15,
      textDecorationLine:'underline',
    }
});
