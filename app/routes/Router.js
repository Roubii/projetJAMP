import React, {Component} from 'react';

import {View, Text, StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import Home from '../components/Home';
import Popup from '../components/Popup';
import Entete from '../components/Entete';
import Map from '../components/Map';
import SearchableList from '../components/SearchableList';

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

  renderPage(){
    if(this.state.page === 'map') {
      return <View style={{flex:1}}>
        <Entete search={() => {this.setState({page:'search'}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
        <Map/>
      </View>
    } else if (this.state.page === 'ouestfrance') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search'}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <Popup/>
      </View>
    }else if (this.state.page === 'additi') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search'}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <Popup/>
      </View>
    }else if (this.state.page === 'search') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search'}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <SearchableList/>
      </View>
    }else {
      return <View style={{flex:1}}>
        <Entete search={() => {this.setState({page:'search'}) }} map={() => {this.setState({page:'map'})}}/>
        <Home OuestFrance={() => {this.setState({page:'ouestfrance'}) }} Additi={() => {this.setState({page:'additi'}) }}/>
      </View>
    }
  }


  render () {

    return (
      <View style={styles.main}>
        {this.renderPage()}
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