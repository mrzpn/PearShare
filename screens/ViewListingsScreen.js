import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Touchable } from 'react-native';

// Foods
import bacon from '../assets/foods/bacon.png';
import pasta from '../assets/foods/pasta.png';
import pears from '../assets/foods/pears.png';
import ribs from '../assets/foods/ribs.png';
import tomato from '../assets/foods/tomato.png';
import postListing from '../assets/postListingTile.png';

export default function ViewListingsScreen() {
    return (
      <View style={stylesContainers.container}>
        <View style={stylesContainers.header}>
          <Text style={stylesFont.title}>All Listings</Text>
        </View>
        <View style={stylesContainers.myListings}>
          <Text style={stylesFont.subtitle}>My listings:</Text>
          <Tile1 foodImg={postListing}/>
        </View>
        <View style={stylesContainers.recentlyViewed}>
          <Text style={stylesFont.subtitle}>Recently viewed:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
          <Tile3 foodImg={pasta} name="Pasta" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
          <Tile3 foodImg={bacon} name="Bacon" price="$5" dist="1 - 5km" exp="10/8" expCol="red"/>
        </View>
          <View style={stylesContainers.pastOrders}>
            <Text style={[stylesFont.subtitle, {top: 0}]}>Past orders:</Text>
            <ScrollView horizontal={true} vertical={false} style={{paddingTop: 36}}>
              <Tile2 foodImg={tomato} name="Tomatoes" price="$5" dist="1 - 5km" exp="10/8"/>
              <Tile2 foodImg={ribs} name="Ribs" price="$5" dist="1 - 5km" exp="10/8"/>
              <Tile2 foodImg={ribs} name="Ribs" price="$5" dist="1 - 5km" exp="10/8"/>
            </ScrollView>
          </View> 
        <View style={{width: "130%", height: 110, backgroundColor: "grey", position: "absolute", bottom: 0}}>
          <Text style={{alignSelf: "center"}}>Nav Bar</Text>
        </View>
      </View>
    );
}

const Tile3 = (props) => {
  return (
    <View style={stylesContainers.tile3}>
      <TouchableOpacity>
        <Image source={props.foodImg} style={{width: "100%", height: "55%", borderRadius: 10, marginBottom: 2}}/>
        <Text style={stylesFont.tileTitle}>{props.name}</Text>
        <Text>{props.price} • {props.dist}</Text>
        <Text style={{color: props.expCol}}>exp {props.exp}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tile2 = (props) => {
  return (
    <View style={stylesContainers.tile2}>
      <TouchableOpacity>
        <Image source={props.foodImg} style={{width: "100%", height: "60%", borderRadius: 10, marginBottom: 3}}/>
        <Text style={stylesFont.tileTitle}>{props.name}</Text>
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
      <View style={stylesContainers.tile1}>
        <TouchableOpacity onPress={handlePost}>
            <Image source={props.foodImg} style={{width: "100%", height: 110, borderRadius: 10, marginBottom: 3}}/>
            <Text style={stylesFont.tileTitle}>{props.name}</Text>
        </TouchableOpacity>
      </View>
  );
}


const stylesContainers = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
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
    myListings: {
      position: "absolute",
      width: 390,
      height: 240,
      top: 135,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    recentlyViewed: {
      position: "absolute",
      width: 390,
      height: 200,
      top: 340,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    pastOrders: {
      flex: 1,
      left: 16,
      top: 545,
      flexDirection:'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
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
      marginRight: 20
    },
    tile1: {
      width: 185,
      height: 185,
      alignSelf: "flex-end",
      marginBottom: 10,
    }
});

const stylesFont = StyleSheet.create({
  title: {
    position: "absolute",
    top: 65,
    fontSize: 40,
    color: '#313131',
    fontWeight: "bold",
  },
  subtitle: {
    position: "absolute",
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