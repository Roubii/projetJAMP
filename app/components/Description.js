import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';



export default class Description extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
			
<ScrollView nestedScrollEnabled={true} >

<View style={styles.globalContainer}>
            <View style={styles.descriptifContainer}>
            <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
              <Text h1 style={styles.titre}>Descriptif</Text>
              <Text style={styles.paragraphe}>Altera sententia est, quae definit amicitiam paribus officiis ac voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos vocare amicitiam, ut par sit ratio acceptorum et datorum. Divitior mihi et affluentior videtur esse vera amicitia nec observare restricte, ne plus reddat quam acceperit; neque enim verendum est, ne quid excidat, aut ne quid in terram defluat, aut ne plus aequo quid in amicitiam congeratur.

  Sed cautela nimia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ignotus, acerbum et inplacabilem et in hoc causarum titulo dissimilem sui.

  Nd Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ignotus, acerbum et inplacabilem et in hoc causarum titulo dissimilem sui.

Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes, nec credi potest qua obsequiorum diversitate coluntur homines sine liberis Romae.
           
              </Text>
            </View>

            <View style={styles.divider}></View>


            <View style={styles.filialeContainer}>
            <TouchableOpacity >
                <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
                <Image style={styles.image}source={require('../img/PRECOM/logo-500x172_precom-alimentation.jpg')} />
                <Image style={styles.image}source={require('../img/REGIE-RADIOS-REGION/logo-500x172_cocktail-fm.jpg')} />
               
            </TouchableOpacity>
            </View>

   </View>
</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	
  globalContainer: {
    width: 800,
    height:450,
    flexDirection:'row',
    overflow: 'scroll',
    padding: 10,
    alignItems:'center'
    
    
  },
  descriptifContainer: {
    flex:1.2,
    width: 400,
    
    

  },
  titre: {
    fontSize: 20,
    marginBottom:10
  },
  paragraphe:{
    textAlign :'justify',
    marginBottom :10

  },
  filialeContainer: {
    flex:0.8,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:380
  },
  image:{
    width:250,
    resizeMode:'contain',
   
  },
  divider :{
    width:1,
    height: '50%',
    borderRightWidth: 2,
    borderRightColor: 'grey',
    padding:20,
  }
	
});
