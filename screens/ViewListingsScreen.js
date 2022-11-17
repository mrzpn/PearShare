import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Touchable } from 'react-native';

// style sheet
import {containers, fonts} from '../styles/Global';
import Tile3 from '../components/Tile3';

// Foods
import bacon from '../assets/foods/bacon.png';
import pasta from '../assets/foods/pasta.png';
import pears from '../assets/foods/pears.png';
import ribs from '../assets/foods/ribs.png';
import tomato from '../assets/foods/tomato.png';
import postListing from '../assets/postListingTile.png';

export default function ViewListingsScreen() {
    return (
      <View style={containers.container}>
        <View style={containers.header}>
          <Text style={fonts.title}>All Listings</Text>
        </View>
        <View style={styleContainers.myListings}>
          <Text style={styleFonts.subtitle}>My listings:</Text>
          <Tile1 foodImg={postListing}/>
        </View>
        <View style={styleContainers.recentlyViewed}>
          <Text style={styleFonts.subtitle}>Recently viewed:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="21/11" expCol="red"/>
          <Tile3 foodImg={pasta} name="Pasta" price="$10" dist="15km" exp="10/12"/>
          <Tile3 foodImg={bacon} name="Bacon" price="$7" dist="1 - 5km" exp="20/11" expCol="red"/>
        </View>
          <View style={styleContainers.pastOrders}>
            <Text style={styleFonts.subtitle}>Past orders:</Text>
            <ScrollView horizontal={true} vertical={false}>
              <Tile2 foodImg={tomato} name="Tomatoes" price="$5" dist="1 - 5km" exp="02/11"/>
              <Tile2 foodImg={ribs} name="Ribs" price="$24" dist="5 - 10km" exp="14/9"/>
              <Tile2 foodImg={pasta} name="Pasta" price="$12" dist="2km" exp="10/8"/>
            </ScrollView>
          </View> 
      </View>
    );
}

const Tile2 = (props) => {
  return (
    <View style={styleContainers.tile2}>
      <TouchableOpacity>
        <Image source={props.foodImg} style={{width: "100%", height: 110, borderRadius: 10, marginBottom: 3}}/>
        <Text style={styleFonts.tileTitle}>{props.name}</Text>
        <Text>{props.price} • {props.dist}</Text>
        <Text>exp {props.exp}</Text>
      </TouchableOpacity>
    </View>
  );
}

function handlePost(e) {
  e.preventDefault();
  alert("hello!");
}

const Tile1 = (props) => {
  return (
      <View style={styleContainers.tile1}>
        <TouchableOpacity onPress={handlePost}>
            <Image source={props.foodImg} style={{width: "100%", height: 110, borderRadius: 10, marginBottom: 3}}/>
            <Text style={styleFonts.tileTitle}>{props.name}</Text>
        </TouchableOpacity>
      </View>
  );
}


const styleContainers = StyleSheet.create({
    myListings: {
      width: 390,
      height: 220,
      flexDirection: "row",
    },
    recentlyViewed: {
      width: 390,
      height: 200,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    pastOrders: {
      flex: 1,
      flexDirection:'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    tile3: {
      width: 115,
      height: 140,
      top: 34,
    },
    tile2: {
      width: 185,
      height: 250,
      top: 34,
      marginRight: 20
    },
    tile1: {
      width: 185,
      height: 185,
      top: 34,
      shadowColor: '#171717',
      shadowOffset: {height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }
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