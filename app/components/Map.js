import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import Annotations from './Annotations';

Mapbox.setAccessToken(
	'pk.eyJ1IjoicGFjdGVzcyIsImEiOiJjazBjNmsydmMweXJlM21wZTh6NGl4cml3In0.QtCHsu5sWL6tKXP6so4bbA'
);

export default class Map extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Mapbox.MapView
					styleURL={Mapbox.StyleURL.Street}
					style={styles.container}>
              <Mapbox.Camera
                zoomLevel={6.5}
                centerCoordinate={[-1, 48.08]}
              />
							
					<Annotations/>
				</Mapbox.MapView>
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
