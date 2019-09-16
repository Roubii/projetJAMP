import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import Annotations from './Annotations';
import Filter from './Filters';

Mapbox.setAccessToken(
	'pk.eyJ1IjoicGFjdGVzcyIsImEiOiJjazBjNmsydmMweXJlM21wZTh6NGl4cml3In0.QtCHsu5sWL6tKXP6so4bbA'
);

export default class Map extends Component {


	constructor (props) {
		super(props);
		this.state = {
			detailAdress: false
		}
	}

	getAdresse (adresse) {
		this.setState({
			detailAdress: adresse
		})
	}

	render() {
		return (
			<View style={styles.container}>
			
				<Mapbox.MapView
					styleURL={Mapbox.StyleURL.Street}
					style={styles.container}
					rotateEnabled={false}
					maxZoomLevel={4}>
              <Mapbox.Camera
                zoomLevel={6.5}
								centerCoordinate={[-1, 48.08]}
              />
							
					<Annotations sendAdresse={this.getAdresse.bind(this)} popup={this.props.annotations}/>
				</Mapbox.MapView>	
					<Filter/>
			</View> 
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		height: 400,
		marginTop: 80
	},
	annotationContainer: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 15
	},
	annotationFill: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'blue',
		transform: [{ scale: 0.6 }]
	}
});
