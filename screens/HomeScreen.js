import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// style sheet
import {containers, fonts} from '../styles/Global';
import Tile3 from '../components/Tile3';
import Tile2 from '../components/Tile2';

// Foods
import bacon from '../assets/foods/bacon.png'
import pasta from '../assets/foods/pasta.png'
import pears from '../assets/foods/pears.png'
import ribs from '../assets/foods/ribs.png'
import tomato from '../assets/foods/tomato.png'

export default function HomeScreen({navigation}) {
    return (
      <View style={containers.container}>
        <View style={containers.header}>
          <Text style={fonts.title}>Explore</Text>
        </View>
        <View style={styleContainers.suggested}>
          <Text style={styleFonts.subtitle}>Suggested Listings:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$7" dist="1 - 5km" exp="29/11" quantity={4} navigation={navigation}/>
          <Tile3 foodImg={pasta} name="Pasta" price="$10" dist="15km" exp="10/12" quantity={2} navigation={navigation}/>
          <Tile3 foodImg={bacon} name="Bacon" price="$12" dist="5km" exp="27/11" quantity={12} navigation={navigation}/>
        </View>
        <View style={styleContainers.nearYou}>
          <Text style={styleFonts.subtitle}>Near you:</Text>
          <Tile2 foodImg={tomato} name="Tomatoes" price="$11" dist="1 - 5km" exp="25/11" quantity={5} navigation={navigation}/>
          <Tile2 foodImg={ribs} name="Ribs" price="$21" dist="1 - 5km" exp="02/12" quantity={7} navigation={navigation}/>
        </View>
        <View style={styleContainers.expiring}>
          <Text style={styleFonts.subtitle}>Expiring soon:</Text>
          <Tile3 foodImg={pears} name="Pears" price="$5" dist="1 - 5km" exp="21/11" expCol="red" quantity={9} navigation={navigation}/>
          <Tile3 foodImg={tomato} name="Tomato" price="$2" dist="1 - 5km" exp="23/11" expCol="red" quantity={1} navigation={navigation}/>
          <Tile3 foodImg={bacon} name="Bacon" price="$7" dist="1 - 5km" exp="20/11" expCol="red" expCol="red" quantity={3} navigation={navigation}/>
        </View>
      </View>
    );
}

const styleContainers = StyleSheet.create({
    suggested: {
      width: 390,
      height: 190,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    nearYou: {
      width: 390,
      height: 220,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    expiring: {
      width: 390,
      height: 200,
      flexDirection: "row",
      justifyContent: "space-between",
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