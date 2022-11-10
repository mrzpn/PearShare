import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { containers, fonts  } from '../styles/Global';

import OrangeButton from '../components/OrangeButton';

export default function IndividualListingScreen() {
    const quantity = 3;
    const item = 'Pears';
    const title = `${item} (${quantity})`;
    const foodImg = '../assets/pears.jpg';
    const price = "$5";
    const dist = '5 - 10km';
    const exp = '10/8/2022';
    const profile = '../assets/pears.jpg';
    const profileName = "Calvin Venturo"
    const itemDesc = '3 leftover European pears purchased from Woolworths about a week ago.'
  return (
    <View style={[containers.container, {alignItems: 'flex-start'}]}>
      <View style={[containers.header]}>
        {/* Title */}
        <Text style={fonts.title}>{title}</Text>
      </View>
      <Image source={require(foodImg)} style={{width: 380, height: 250, borderRadius: 10}} />
      <Text
          style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}
      >{price} • {dist} • exp {exp}</Text>
      <View style={[styles.center, {marginVertical: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}]}>
        <Image source={require(profile)} style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}} />
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{profileName}</Text>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Item Description</Text>
      <Text style={{fontSize: 20}}>{itemDesc}</Text>
      <View style={{marginVertical: 20, flexDirection: 'row'}}>
        <View style={{width: '50%', marginVertical: 20, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <OrangeButton label='Back to search' onPress={() => {}} />
        </View>
        <View style={{width: '50%', marginVertical: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <OrangeButton label='Back to search' onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nearYou: {
    width: '100%',
    height: 400,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tile2: {
    width: '100%',
    height: 400,
    top: 34,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
  },
});
