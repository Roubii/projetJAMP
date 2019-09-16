import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Alert, Dimensions } from 'react-native';

let {width} = Dimensions.get('screen');

export default class Filter extends Component {
  constructor (props) {
    super(props);
    this.state  = {
      left: new Animated.Value(-width),
      visible: false
    }
  }
  ButtonClicked()
  {
    this.setState({
      visible: true
    }, () => this.animate());
  }

  animate () {
    Animated.timing(
      this.state.left,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start()
    
  }

  render() {
    return (
      <Fragment>
        {
          (this.state.visible) &&
          <Animated.View style={[styles.container, {right: this.state.left}]}>

          </Animated.View>
        }

        <TouchableOpacity
            style={styles.myButton}
            onPress={()=>this.ButtonClicked()}
              >
          <Text>Click Me</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
myButton:{
  paddingHorizontal:20,
  paddingVertical:15,
  backgroundColor:'#b68ab8',
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
  backgroundColor: 'red',
  position:"absolute",
  top:0,
  
},
});


