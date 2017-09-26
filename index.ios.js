import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Mapbox, { MapView, Annotation } from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiaGVucmlrcmEiLCJhIjoiY2o1a3czMjA1MDlzejJwbXhpam1oMTJpMSJ9.TANJvIveftY7gEV8Um3Aew');

export default class mapboxCustomAnnotations extends Component {
  state = {showNewAnnotation: false}

  toggleNewMarker = () => {
    this.setState({showNewAnnotation: !this.state.showNewAnnotation})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map} 
          initialCenterCoordinate={{ latitude: 65.0121, longitude: 25.4651 }} 
          initialZoomLevel={12}
        >
          <Annotation
            id="fromMarker"
            coordinate={{
              latitude: 65.0121,
              longitude: 25.4681,
            }}
            style={styles.customMarkerContainer}
          >
            <View style={styles.customMarker} />
          </Annotation>
          {this.state.showNewAnnotation && (
            <Annotation
              id="toMarker"
              coordinate={{
                latitude: 65.0221,
                longitude: 25.4751,
              }}
              style={styles.customMarkerContainer}
            >
              <View style={styles.customMarker} />
            </Annotation>
          )}
        </MapView>
        <Button title="Show new marker" onPress={this.toggleNewMarker} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1
  },
  customMarker: {
    width: 75,
    height: 75,
    backgroundColor: 'red'
  },
  customMarkerContainer: {alignItems: 'center', justifyContent: 'center', position: 'absolute'}
});

AppRegistry.registerComponent('mapboxCustomAnnotations', () => mapboxCustomAnnotations);
