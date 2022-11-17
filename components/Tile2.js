import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { containers, fonts  } from '../styles/Global';

const Tile2 = (props) => {
  return (
    <View style={styles.tile2}>
      <TouchableOpacity
        style={containers.shadowProp}
        onPress={() => props.navigation.navigate("Listing", {params: {
          item: props.name,
          quantity: props.quantity,
          foodImg: props.foodImg,
          price: props.price,
          dist: props.dist,
          exp: props.exp,
        }})}
      >
        <Image source={props.foodImg} style={{width: "100%", height: 110, borderRadius: 10, marginBottom: 3}}/>
        <Text style={styles.tileTitle}>{props.name}</Text>
        <Text>{props.price} • {props.dist}</Text>
        <Text>exp {props.exp}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tile2;

const styles = StyleSheet.create({
  nearYou: {
    width: 390,
    height: 220,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tile2: {
    width: 185,
    height: 185,
    top: 34,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
  },
});

const styleContainers = StyleSheet.create({
    tile2: {
        width: 185,
        height: 185,
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