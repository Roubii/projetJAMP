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
      visible: false
    }
  }
  ButtonClicked ()
  {
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

  render() {
    return (
      <Fragment>
        <Animated.View style={[styles.container, {right: this.state.left}]}>

          <View style={styles.containerFilter}>

            <Text style={styles.groupFilter}>Groupe : </Text>

            <View>
            <TouchableOpacity onPress={() => this.props.filtre('Ouest-France', 'groupe')}><Text style={styles.textFilter}>Ouest-France</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.filtre('Additi', 'groupe')}><Text style={styles.textFilter}>Additi</Text></TouchableOpacity>
            </View>

          </View>

          <View style={styles.containerFilter}>

            <Text style={styles.groupFilter}>Type : </Text>

            <View style={{flexWrap:'wrap'}}>
            <TouchableOpacity onPress={() => this.props.filtre('Rédaction', 'type')}><Text style={styles.textFilter}>Rédaction</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.filtre("Imprimerie", 'type')}><Text style={styles.textFilter}>Imprimerie</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.filtre('édition', 'type')}><Text style={styles.textFilter}>Edition</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.filtre('Siège', 'type')}><Text style={styles.textFilter}>Siège</Text></TouchableOpacity>
            </View>

          </View>

          <Button onPress={() => this.props.filtre()} title="Réinitialiser" color="#E2001A"/>

        </Animated.View>
        <Animated.View style={[styles.myButton, {right: this.state.btnright}]}>
          <TouchableOpacity onPress={()=>this.ButtonClicked()} >
            {
              (this.state.visible) ?
              <Icons name="ios-arrow-dropright-circle" size={50} color="#000" />
              :
              <Icons name="ios-arrow-dropleft-circle" size={50} color="#000" />
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
container: {
  flex: 1,
  width: '30%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  position:"absolute",
  top:0,
  borderLeftWidth: 2,
  borderLeftColor: '#b6bab6',
},
containerFilter : {
  flexDirection:'row',
  padding:20,
},
groupFilter : {
  fontSize:18,
  fontWeight:'700',
  paddingRight:20
},
textFilter:{
  fontSize:18,
  fontWeight:'700',
  paddingBottom:30
}
});


