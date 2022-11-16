import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Tile3 = (props) => {
    return (
      <View style={styleContainers.tile3}>
        <TouchableOpacity>
          <View style={styleContainers.shadowProp}>
            <Image source={props.foodImg} style={{width: "100%", height: 75, borderRadius: 10, marginBottom: 3}}/>
          </View>
          <Text style={styleFonts.tileTitle}>{props.name}</Text>
          <Text>{props.price} • {props.dist}</Text>
          <Text style={{color: props.expCol}}>exp {props.exp}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Tile3;

const styleContainers = StyleSheet.create({
    tile3: {
      width: 115,
      height: 140,
      top: 34,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
});

const styleFonts = StyleSheet.create({
  subtitle: {
    position: "absolute",
    fontSize: 20,
    color: '#313131',
    fontWeight: "bold",
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
  },
})