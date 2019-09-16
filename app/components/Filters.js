import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { genericTypeAnnotation } from '@babel/types';
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
        duration: 1000,
      }
    ).start()
    Animated.timing(
      this.state.btnright,
      {
        toValue: (width * .3),
        duration: 1000,
      }
    ).start()
    
  }
  animateOut () {
    Animated.timing(
      this.state.left,
      {
        toValue: -(width * .3),
        duration: 1000,
      }
    ).start()
    Animated.timing(
      this.state.btnright,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start()
    
  }

  render() {
    return (
      <Fragment>
        <Animated.View style={[styles.container, {right: this.state.left}]}>

        </Animated.View>
        <Animated.View style={[styles.myButton, {right: this.state.btnright}]}>
          <TouchableOpacity onPress={()=>this.ButtonClicked()} >
            {
              (this.state.visible) ?
              <Icons name="ios-arrow-dropright-circle" size={50} color="#000" />
              :
              <Icons name="ios-arrow-dropleft-circle" size={50} color="#000" />
            }
         
              {/* <Icons name={(this.state.visible)?"ios-arrow-dropright-circle":"ios-arrow-dropleft-circle"} size={50} color="#000" /> */}

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
});


