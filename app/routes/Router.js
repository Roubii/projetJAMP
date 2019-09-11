import React, {Component} from 'react';

import {View, Text, StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import Home from '../components/Home';
import Popup from '../components/Popup';
import Entete from '../components/Entete';

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
          <View style={styles.main}>
              <Entete home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
              <Popup/>
          </View>
          :
          <View style={styles.main}>
            <Entete map={() => {this.setState({page:'map'})}}/>
            <Home OuestFrance={() => {this.setState({page:'ouestfrance'}) }} Additi={() => {this.setState({page:'additi'}) }}/>
          </View>
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