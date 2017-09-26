import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Mapbox, { MapView } from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiaGVucmlrcmEiLCJhIjoiY2o1a3czMjA1MDlzejJwbXhpam1oMTJpMSJ9.TANJvIveftY7gEV8Um3Aew');

export default class mapboxCustomAnnotations extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map} 
          initialCenterCoordinate={{ latitude: 65.0121, longitude: 25.4651 }} 
          initialZoomLevel={12}
        />
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
});

AppRegistry.registerComponent('mapboxCustomAnnotations', () => mapboxCustomAnnotations);
