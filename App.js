import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude: -8.114928,
          longitude: 115.098425
        },
        title:"SMK N 3 Singaraja",
        description:"SMK N 3 Singaraja"
      },
      {
        key:2,
        latlng: {
          latitude: -8.11062,
          longitude: 115.090367
        },
        title:"SMK N 1 Singaraja",
        description:"SMK N 1 Singaraja"
      },
      {
        key:3,
        latlng: {
          latitude: -8.1284085,
          longitude: 115.0846376
        },
        title:"SMK N 2 Singaraja",
        description:"SMK N 2 Singaraja "
      }
      ,
      {
        key:4,
        latlng: {
          latitude: -8.119674,
          longitude: 115.099527
        },
        title:"SMK TI Bali Global Singaraja",
        description:"SMK TI Bali Global Singaraja"
      }
      
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Beberapa Sekolah SMK di Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
            <Text style={styles.textFooter}>
              @dodiartha46@gmail.com
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
