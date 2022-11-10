import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function SearchScreen() {
  const [text, onChangeText] = React.useState("");
  const onPress = () => console.log("Button Pressed")

  return (
    <View style={styles.content}>
      {/* Title */}
      <View style={[styles.container]}>
        <Text style={styles.title}>Search</Text>
      </View>
      {/* Search By Keywords */}
      <View style={[styles.container, {flexDirection: 'row'}]}>
        <TextInput style={styles.input} />
        {/* <View style={{backgroundColor: '#e4e4e4', borderRadius: 10, width: '85%', margin: 5}}>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search by keyword"
          ></TextInput>
        </View> */}
        <TouchableOpacity
          style={styles.circle}
          onPress={() => rad}
        >
          <Image
            style={styles.icon}
            source={require('../assets/search-icon.png')}
            />
        </TouchableOpacity>
      </View>
      {/* Type of Listing */}
      <View style={[styles.container]}>
          <Text style={styles.header}>Type of Listing:</Text>
      </View>
      {/* Type of Food/Drink */}
      <View style={[styles.container]}>
          <Text style={styles.header}>Type of Food/Drink:</Text>

      </View>
      {/* Price Range */}
      <View style={[styles.container]}>
          <Text style={styles.header}>Price Range:</Text>

      </View>
      {/* Location */}
      <View style={[styles.container]}>
          <Text style={styles.header}>Location:</Text>
      </View>
      {/* Search Button */}
      <View style={[styles.container]}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >
            <Text style={{color: 'white'}}>Search</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    width: '70%',
    margin: 12,
    borderWidth: 0,
    padding: 0,
    backgroundColor: '#e4e4e4',
    color: '#313131',
    fontSize: 15,
    borderRadius: 15
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    padding: 14,
    width: '100%'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    padding: 0
  },
  title: {
    fontSize: 40,
  },
  header: {
    fontSize: 28,
  },
  textInput: {
    height: '5%',
    padding: 4,
  },
  button: {
    backgroundColor: '#FF805E',
    width: 139,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  circle: {
    backgroundColor: '#e4e4e4',
    borderRadius: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '11%',
    margin: 5
  },
  icon: {
    width: 25,
    height: 25
  },
});
