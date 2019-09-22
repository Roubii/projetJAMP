import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Dimensions, Button } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'



let {width} = Dimensions.get('screen');

export default class Filter extends Component {

  constructor (props) {
    super(props);
    this.state  = {
      left: new Animated.Value(-(width*.3)),
      btnright: new Animated.Value(0),
      visible: false,
      ouestfrance : false,
      additi : false,
      redaction: false,
      imprimerie: false,
      siege: false,
      edition: false,
    }

  }

  // Animations de la barre de filtre
  // Clic du bouton actionne l'agrandissement de la view
  ButtonClicked (){

    let {visible} = this.state;
    if (!visible) {
      this.setState({
        visible: true
      }, () => this.animate());
    } else {
      this.setState({
        visible: false
      }, () => this.animateOut());
    }
  }

  animate () {
    Animated.timing(
      this.state.left,
      {
        toValue: 0,
        duration: 800,
      }
    ).start()
    Animated.timing(
      this.state.btnright,
      {
        toValue: (width * .3),
        duration: 800,
      }
    ).start()
    
  }
  animateOut () {
    Animated.timing(
      this.state.left,
      {
        toValue: -(width * .3),
        duration: 800,
      }
    ).start()
    Animated.timing(
      this.state.btnright,
      {
        toValue: 0,
        duration: 800,
      }
    ).start()    
  }

  // Remise à zéro des filtres, tous les filtres sont désélectionnés

  resetFilters () {
    this.setState({
      ouestfrance : false,
      additi : false,
      redaction: false,
      imprimerie: false,
      siege: false,
      edition: false,
    })
  }

  // Changement du style des filtres, l'actionnement d'un filtre supprime celui du précédent
  ouestfrancefilter () {
    this.setState({
      ouestfrance:true,
      additi : false,
      redaction: false,
      imprimerie: false,
      siege: false,
      edition: false,
    })
  }
  additifilter () {
    this.setState({
      ouestfrance:false,
      additi : true,
      redaction: false,
      imprimerie: false,
      siege: false,
      edition: false,
    })
  }
  redactionfilter () {
    this.setState({
      ouestfrance:false,
      additi : false,
      redaction: true,
      imprimerie: false,
      siege: false,
      edition: false,
    })
  }
  imprimeriefilter () {
    this.setState({
      ouestfrance:false,
      additi : false,
      redaction: false,
      imprimerie: true,
      siege: false,
      edition: false,
    })
  }
  siegefilter () {
    this.setState({
      ouestfrance:false,
      additi : false,
      redaction: false,
      imprimerie: false,
      siege: true,
      edition: false,
    })
  }
  editionfilter () {
    this.setState({
      ouestfrance: false,
      additi : false,
      redaction: false,
      imprimerie: false,
      siege: false,
      edition: true,
    })
  }

  render() {

    return (

      <Fragment>
        <Animated.View style={[styles.container, {right: this.state.left}]}>

          <View style={styles.containerFilter}>
            <Text style={styles.filtre}>Filtres</Text>
            <Text style={styles.groupFilter}>Groupe</Text>

            <View style={{justifyContent:'center',alignItems:'center'}}>
              
              {
                (this.state.ouestfrance === false) ?
                  <TouchableOpacity onPress={() => {this.props.filtre('Ouest-France', 'groupe'); this.ouestfrancefilter()}}><Text style={styles.textFilter}>Ouest-France</Text></TouchableOpacity>
                :
                  <Text style={styles.textFilterOn}>Ouest-France</Text>
              }
              {
                (this.state.additi === false) ?
                  <TouchableOpacity onPress={() => {this.props.filtre('Additi', 'groupe'); this.additifilter()}}><Text style={styles.textFilter}>Additi</Text></TouchableOpacity>
                :
                  <Text style={styles.textFilterOn}>Additi</Text>
              }
            </View>

          </View>

          <View style={styles.containerFilter}>

            <Text style={styles.groupFilter}>Type</Text>

            <View style={{justifyContent:'center',alignItems:'center'}}>              
              {
                (this.state.redaction === false) ?
                  <TouchableOpacity onPress={() => {this.props.filtre('Rédaction', 'type'); this.redactionfilter()}}><Text style={styles.textFilter}>Rédaction</Text></TouchableOpacity>
                :
                  <Text style={styles.textFilterOn}>Rédaction</Text>
              }
              {
                (this.state.imprimerie === false) ?
                  <TouchableOpacity onPress={() => {this.props.filtre("Imprimerie", 'type'); this.imprimeriefilter()}}><Text style={styles.textFilter}>Imprimerie</Text></TouchableOpacity>
                :
                  <Text style={styles.textFilterOn}>Imprimerie</Text>
              }
              {
                (this.state.edition === false) ?
                  <TouchableOpacity onPress={() => {this.props.filtre('Edition', 'type'); this.editionfilter()}}><Text style={styles.textFilter}>Edition</Text></TouchableOpacity>
                :
                  <Text style={styles.textFilterOn}>Edition</Text>
              }
              {
                (this.state.siege === false) ?
                  <TouchableOpacity onPress={() => {this.props.filtre('Siège', 'type'); this.siegefilter()}}><Text style={styles.textFilter}>Siège</Text></TouchableOpacity>
                :
                  <Text style={styles.textFilterOn}>Siège</Text>
              }
            </View>

          </View>

          <Button style={{fontWeight:700}} onPress={() => {this.props.filtre(); this.resetFilters()}} title="Réinitialiser" color="#E2001A"/>

        </Animated.View>
        <Animated.View style={[styles.myButton, {right: this.state.btnright}]}>
          <TouchableOpacity onPress={()=>this.ButtonClicked()} >
            {
              (this.state.visible) ?
              <Icons name="ios-arrow-dropright-circle" size={50} color="#083E98" />
              :
              <Icons name="ios-arrow-dropleft-circle" size={50} color="#083E98" />
            }

          </TouchableOpacity>
        </Animated.View>
      </Fragment>

    );
  }
}





const styles = StyleSheet.create({

myButton:{
  paddingHorizontal:20,
  paddingVertical:15,
  backgroundColor:'transparent',
  position: "absolute",
  top: '50%',
  right: 0
},
container:{
  flex: 1,
  width: '30%',
  height: '100%',
  justifyContent:'space-between',
  backgroundColor: '#fff',
  position:"absolute",
  top:0,
  borderLeftWidth: 2,
  borderLeftColor: '#b6bab6'
},
containerFilter : {
 justifyContent:'center'
},
groupFilter:{
  fontSize:18,
  fontWeight:'700',
  backgroundColor:'#083E98',
  textAlign:'center',
  width:'100%',
  color:'white',
  marginBottom:40,
  padding:5
},
textFilter:{
  fontSize:18,
  fontWeight:'700',
  padding:15
},
textFilterOn:{
  fontSize:18,
  fontWeight:'700',
  padding:8,
  margin: 7,
  backgroundColor: '#E2001A',
  color:'#fff',
  borderRadius:30,
},
filtre:{
  fontSize:30,
  fontWeight:'700',
  textAlign:'center',
  padding:10
}
});


