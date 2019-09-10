import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';

export default class Entete extends Component {

render() {
 
    return (
      <View style={styles.container}>
       <View style={styles.RectangleShapeView} >
        
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  container: {
 
    flex: 1,
  
    
    backgroundColor: '#F5FCFF',
  },
 
  
 
  RectangleShapeView: {
 
 
  width: 961 ,
  height: 65,
  backgroundColor: '#fff',
  borderBottomColor: 'grey',
  borderBottomWidth: 2
 
 }
 
});