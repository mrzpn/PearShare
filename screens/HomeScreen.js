import { StyleSheet, Text, View, Image } from 'react-native';

// Foods
import bacon from '../assets/foods/bacon.png'
import pasta from '../assets/foods/pasta.png'
import pears from '../assets/foods/pears.png'
import ribs from '../assets/foods/ribs.png'
import tomato from '../assets/foods/tomato.png'

export default function HomeScreen() {
    return (
      <View style={stylesContainers.container}>
        <View style={stylesContainers.header}>
          <Text style={stylesFont.title}>Explore</Text>
        </View>
        <View style={stylesContainers.suggested}>
          <Text style={stylesFont.subtitle}>Suggested Listings:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="10/8"/>
          <Tile3 foodImg={pasta} name="Pasta" price="$5" dist="1 - 5km" exp="10/8"/>
          <Tile3 foodImg={bacon} name="Bacon" price="$5" dist="1 - 5km" exp="10/8"/>
        </View>
        <View style={stylesContainers.nearYou}>
          <Text style={stylesFont.subtitle}>Near you:</Text>
          <Tile2 foodImg={tomato} name="Tomatoes" price="$5" dist="1 - 5km" exp="10/8"/>
          <Tile2 foodImg={ribs} name="Ribs" price="$5" dist="1 - 5km" exp="10/8"/>
        </View>
        <View style={stylesContainers.expiring}>
          <Text style={stylesFont.subtitle}>Expiring soon:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
          <Tile3 foodImg={pasta} name="Pasta" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
          <Tile3 foodImg={bacon} name="Bacon" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
        </View>
      </View>
    );
}

const Tile3 = (props) => {
  return (
    <View style={stylesContainers.tile3}>
      <Image source={props.foodImg} style={{width: "100%", height: "55%", borderRadius: 10, marginBottom: 2}}/>
      <Text style={stylesFont.tileTitle}>{props.name}</Text>
      <Text>{props.price} • {props.dist}</Text>
      <Text style={{color: props.expCol}}>exp {props.exp}</Text>
    </View>
  );
}

const Tile2 = (props) => {
  return (
    <View style={stylesContainers.tile2}>
      <Image source={props.foodImg} style={{width: "100%", height: "60%", borderRadius: 10, marginBottom: 3}}/>
      <Text style={stylesFont.tileTitle}>{props.name}</Text>
      <Text>{props.price} • {props.dist}</Text>
      <Text>exp {props.exp}</Text>
    </View>
  );
}

const stylesContainers = StyleSheet.create({
    container: {
      flex: 1,
      width: 390,
      height: 844,
      flexDirection: "column",
      overflow: "scrollY",
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "center",
    },
    header: {
      position: "absolute",
      width: 390,
      height: 135,
      top: 0,
    },
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
      height: 190,
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

const stylesFont = StyleSheet.create({
  title: {
    position: "absolute",
    top: 67,
    fontSize: 40,
    color: '#313131',
    fontWeight: "bold",
  },
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