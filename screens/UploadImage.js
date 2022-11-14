import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity, Button } from 'react-native';
import postListing from '../assets/postListingTile.png';
import IconButton from '../components/BackButton';

export default function UploadImage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <IconButton src='../assets/back-arrow.png' onPress={() => {}} />
                <Text style={styles.title}>Upload Image/s</Text>
                <Text style={styles.text}>Strawberry Punnet</Text>
                <Tile foodImg={postListing}/>
                <Tile2 foodImg={postListing}/>
                <Tile3 foodImg={postListing}/>
            </View>
        </View>

    );
}

const Tile = (props) => {
    return (
        <View style={styles.tile}>
          <TouchableOpacity >
              <Image source={props.foodImg} style={{width: "60%", height: 110, borderRadius: 10, marginBottom: 10}}/>
              <Text style={styles.tileTitle}>{props.name}</Text>
          </TouchableOpacity>
        </View>
    );
  }
  const Tile2 = (props) => {
    return (
        <View style={styles.tile2}>
          <TouchableOpacity >
              <Image source={props.foodImg} style={{width: "60%", height: 110, borderRadius: 10, marginBottom: 10}}/>
              <Text style={styles.tileTitle}>{props.name}</Text>
          </TouchableOpacity>
        </View>
    );
  }
  const Tile3 = (props) => {
    return (
        <View style={styles.tile3}>
          <TouchableOpacity >
              <Image source={props.foodImg} style={{width: "60%", height: 110, borderRadius: 10, marginBottom: 10}}/>
              <Text style={styles.tileTitle}>{props.name}</Text>
          </TouchableOpacity>
        </View>
    );
  }

const styles = StyleSheet.create({
    tile: {
        width: 185,
        height: 185,
        top: 176,
        left: 16,
        position: "absolute",
      },
      tile2: {
        width: 185,
        height: 185,
        top: 176,
        left: 140,
        position: "absolute",
      },
      tile3: {
        width: 185,
        height: 185,
        top: 176,
        left: 264,
        position: "absolute",
      },
      tileTitle: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 2,
      },

    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        paddingHorizontal: 16
    },
    header: {
        width: 390,
        height: 135,
    },
    title: {
        position: "absolute",
        top: 67,
        fontSize: 40,
        left: 16,
        color: '#313131',
        fontWeight: "bold",
    },
    text: {
        position: "absolute",
        top: 134,
        fontSize: 20,
        left: 16,
        color: '#313131',
    },

    content: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 14,
        width: '100%'
    },
    inputTitle: {
        height: 110,
        width: 110,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        position: "absolute",
        top: 180,
        fontSize: 12,
        left: 0,
    }
});
