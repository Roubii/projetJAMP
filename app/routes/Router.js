import React, {Component} from 'react';

import {View, Text, StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import Home from '../components/Home';
import Popup from '../components/Popup';
import Entete from '../components/Entete';
import Map from '../components/Map';
import SearchableList from '../components/SearchableList';
import FicheDetail from '../components/FicheDetail';

export default class Router extends Component {
  constructor () {
    super();
    this.state = {
      page: false,
      previous: false
    }
  }
 

  componentDidMount () {
    let t = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      if(t.state.page){
        this.setState({
          page: this.state.previous,
          previous: false,
        })
        return true;
      }
    });
  }


  renderPage () {

    let {page} = this.state;

    if(this.state.page === 'map') {
      return <View style={{flex:1}}>
        <Entete search={() => {this.setState({page:'search', previous: page}) }} home={() => {this.setState({page:false, previous: page}) }} map={() => {this.setState({page:'map', previous: page})}}/>
       <View style={{flex:1, }}>
       <Map annotations={() => {this.setState({page:'info', previous: page}) }}/>
       </View>
      </View> 
    } else if (this.state.page === 'ouestfrance') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search', previous: page}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <Popup close={() => {this.setState({page: this.state.previous})}}/>
      </View>
    }else if (this.state.page === 'additi') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search', previous: page}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <Popup close={() => {this.setState({page: this.state.previous})}}/>
      </View>
    }else if (this.state.page === 'search') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search', previous: page}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <SearchableList resultat={() => {this.setState({page:'info', previous: page}) }}/>
      </View>
    }else  if (this.state.page === 'info') {
      return <View style={{flex:1}}>
      <Entete search={() => {this.setState({page:'search', previous: page}) }} home={() => {this.setState({page:false}) }} map={() => {this.setState({page:'map'})}}/>
      <FicheDetail close={() => {this.setState({page: this.state.previous})}}/>
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