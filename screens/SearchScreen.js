import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function SearchScreen() {
  const [text, onChangeText] = React.useState("");
  const [checked, setChecked] = React.useState("");
  const onPress = () => console.log("Button Pressed")
  return (
    <View style={styles.content}>
      {/* Title */}
      <View style={[styles.container]}>
        <Text style={styles.title}>Search</Text>
      </View>
      {/* Search By Keywords */}
      <View style={[styles.container]}>
        <View>
          <TextInput
            style={[styles.input]}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search by keyword"
          ></TextInput>
        </View>
      </View>
      {/* Type of Listing */}
      <View style={[styles.container]}>
          <Text style={styles.header}>Type of Listing:</Text>
          <View style={{backgroundColor: 'red'}}>
          </View>
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
    height: 30,
    margin: 12,
    borderWidth: 0,
    padding: 14,
    backgroundColor: '#e4e4e4',
    color: '#313131'
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    padding: 14
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
  header: {
    fontSize: 28,
  },
  textInput: {
    width: 313
  },
  button: {
    backgroundColor: '#FF805E',
    width: 139,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
});
