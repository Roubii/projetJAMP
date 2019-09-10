import React, {Component} from 'react';

import {Text, View, TouchableHighlight, StyleSheet, BackHandler} from 'react-native';
import Home from '../components/Home';
import Popup from '../components/Popup';

export default class Router extends Component {
  constructor () {
    super();
    this.state = {
      page: false,
    }
  }

  componentDidMount () {
    let t = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      if(t.state.page){
        t.setState({page:false});
        return true;
      }
    });
  }

  render () {

    return (
      <View style={styles.main}>
        {
          (this.state.page) ?
              <Popup/>
          :
            <Home OuestFrance={() => {this.setState({page:'ouestfrance'}) }} Additi={() => {this.setState({page:'additi'}) }}/>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor:'white',
  },
  return: {
    width:100,
  },
})