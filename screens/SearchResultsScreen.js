import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { containers, fonts  } from '../styles/Global';

import ribs from '../assets/foods/ribs.png';
import tomato from '../assets/foods/tomato.png';

import OrangeButton from '../components/OrangeButton';
import IconButton from '../components/BackButton';
import Tile2 from '../components/Tile2';

export default function SearchResultsScreen({navigation}) {
  return (
    <View style={[containers.container]}>
      <View style={[containers.header]}>
        {/* Title */}
        <Text style={fonts.title}>Search Results</Text>
        <IconButton src='../assets/back-arrow.png' onPress={() => navigation.navigate("Search")} />
      </View>
      <View style={styles.nearYou}>
        <Tile2 foodImg={tomato} name="Tomatoes" quantity='3' price="$5" dist="1 - 5km" exp="10/8" navigation={navigation}/>
        <Tile2 foodImg={ribs} name="Ribs" quantity='2' price="$5" dist="1 - 5km" exp="10/8" navigation={navigation}/>
      </View>
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
