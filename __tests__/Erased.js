//BoutonClose
import React, { Component } from 'react';
import { View, StyleSheet, Image, Modal, TouchableWithoutFeedback } from 'react-native';



export default class BoutonClose extends Component {
  constructor () {
    super();
    this.state ={

    }
  }
	
	render() {
		return (
      <View style={ 
      [styles.container,
        {backgroundColor: this.state.visibleModal ? '': 'white'}]}>
      <Image 
         style={styles.modalBackIcon}
         source={require('../img/BOUTONS/close.png')} />

      
        <Text>text Behind Modal</Text>

        { this._renderButton('BUTTON', () => this.setState({ visibleModal: true}) ) }
        <TouchableWithoutFeedback onPress={() => {this._hideModal()}}> 
         <Modal animationType={"slide"}
         transparent={false}
         visible={this.state.visibleModal}
          onRequestClose={() => {this.visibleModal(false); } }>
         <View style={styles.modalContent}>
            <Row/>
         </View>

       </Modal>
    </TouchableWithoutFeedback>  
  </View> 
		);
	}
}


const styles = StyleSheet.create({
	
  image:{
    width:30,
    height:30,
    resizeMode:'contain',
  }
});


