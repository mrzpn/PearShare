import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// style sheet
import {containers, fonts} from '../styles/Global'

// Foods
import bacon from '../assets/foods/bacon.png'
import pasta from '../assets/foods/pasta.png'
import pears from '../assets/foods/pears.png'
import ribs from '../assets/foods/ribs.png'
import tomato from '../assets/foods/tomato.png'

export default function HomeScreen() {
    return (
      <View style={containers.container}>
        <View style={containers.header}>
          <Text style={fonts.title}>Explore</Text>
        </View>
        <View style={styleContainers.suggested}>
          <Text style={styleFonts.subtitle}>Suggested Listings:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="10/8"/>
          <Tile3 foodImg={pasta} name="Pasta" price="$5" dist="1 - 5km" exp="10/8"/>
          <Tile3 foodImg={bacon} name="Bacon" price="$5" dist="1 - 5km" exp="10/8"/>
        </View>
        <View style={styleContainers.nearYou}>
          <Text style={styleFonts.subtitle}>Near you:</Text>
          <Tile2 foodImg={tomato} name="Tomatoes" price="$5" dist="1 - 5km" exp="10/8"/>
          <Tile2 foodImg={ribs} name="Ribs" price="$5" dist="1 - 5km" exp="10/8"/>
        </View>
        <View style={styleContainers.expiring}>
          <Text style={styleFonts.subtitle}>Expiring soon:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
          <Tile3 foodImg={pasta} name="Pasta" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
          <Tile3 foodImg={bacon} name="Bacon" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
        </View>
        <View style={{width: "130%", height: 110, backgroundColor: "grey", position: "absolute", bottom: 0}}>
          <Text style={{alignSelf: "center"}}>Nav Bar</Text>
        </View>
      </View>
    );
}

const Tile3 = (props) => {
  return (
    <View style={styleContainers.tile3}>
      <TouchableOpacity>
        <Image source={props.foodImg} style={{width: "100%", height: "55%", borderRadius: 10, marginBottom: 2}}/>
        <Text style={fonts.tileTitle}>{props.name}</Text>
        <Text>{props.price} • {props.dist}</Text>
        <Text style={{color: props.expCol}}>exp {props.exp}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tile2 = (props) => {
  return (
    <View style={styleContainers.tile2}>
      <TouchableOpacity>
        <Image source={props.foodImg} style={{width: "100%", height: "60%", borderRadius: 10, marginBottom: 3}}/>
        <Text style={fonts.tileTitle}>{props.name}</Text>
        <Text>{props.price} • {props.dist}</Text>
        <Text>exp {props.exp}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styleContainers = StyleSheet.create({
    suggested: {
      position: "absolute",
      width: 390,
      height: 200,
      top: 135,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    nearYou: {
      position: "absolute",
      width: 390,
      height: 240,
      top: 335,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    expiring: {
      position: "absolute",
      width: 390,
      height: 200,
      top: 565,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    tile3: {
      width: 115,
      height: 140,
      alignSelf: "flex-end",
      marginBottom: 10,
    },
    tile2: {
      width: 185,
      height: 185,
      alignSelf: "flex-end",
      marginBottom: 10,
    },
});

const styleFonts = StyleSheet.create({
  subtitle: {
    position: "absolute",
    width: 275,
    height: 36,
    top: 14,
    fontSize: 20,
    color: '#313131',
    fontWeight: "bold",
  },
  tileTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 2,
  },
})