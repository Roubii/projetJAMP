import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import FlecheRetour from './FlecheRetour';





export default class DescriptionFicheDetail extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
      <View style={styles.descriptifContainer}>
            <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
            <Text h1 style={styles.titre}>Descriptif</Text>
              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
              <Text style={styles.paragraphe}>Altera sententia est, quae definit amicitiam paribus officiis ac voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos vocare amicitiam, ut par sit ratio acceptorum et datorum. 
              Divitior mihi et affluentior videtur esse vera amicitia nec observare restricte, ne plus reddat quam acceperit; neque enim verendum est, ne quid excidat, aut ne quid in terram defluat, aut ne plus aequo quid in amicitiam congeratur.
              cquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes, nec credi potest qua obsequiorum diversitate coluntur homines sine liberis Romae.
              Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant pra 
              </Text>
              </ScrollView>
              <FlecheRetour/>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	
  descriptifContainer: {
    flex:7,
    width: 400,
    marginLeft:40,
    marginTop:40
  },
  titre: {
    fontSize: 20,
    marginBottom:20
  },
  paragraphe:{
    textAlign :'justify',
    marginBottom :10,
 
  },
  image:{
    width:250,
    height:100,
    resizeMode:'contain',
    marginLeft:-30
    

  }
});
