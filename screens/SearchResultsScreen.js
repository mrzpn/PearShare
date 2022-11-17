import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { containers, fonts  } from '../styles/Global';

import ribs from '../assets/search-icon.png';
import tomato from '../assets/search-icon.png';

import OrangeButton from '../components/OrangeButton';
import IconButton from '../components/BackButton';

export default function SearchResultsScreen({navigation}) {
  return (
    <View style={[containers.container]}>
      <View style={[containers.header]}>
        {/* Title */}
        <Text style={fonts.title}>Search Results</Text>
        <IconButton src='../assets/back-arrow.png' onPress={() => navigation.navigate("Search")} />
      </View>
      <View style={styles.nearYou}>
        <Tile2 foodImg={tomato} name="Tomatoes" price="$5" dist="1 - 5km" exp="10/8" navigation={navigation}/>
        <Tile2 foodImg={ribs} name="Ribs" price="$5" dist="1 - 5km" exp="10/8"/>
      </View>
    </View>
  );
}

const Tile2 = (props) => {
  return (
    <View style={styles.tile2}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Listing")}
      >
        <Image source={props.foodImg} style={{width: "100%", height: 110, borderRadius: 10, marginBottom: 3}}/>
        <Text style={styles.tileTitle}>{props.name}</Text>
        <Text>{props.price} • {props.dist}</Text>
        <Text>exp {props.exp}</Text>
      </TouchableOpacity>
    </View>
  );
}

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
