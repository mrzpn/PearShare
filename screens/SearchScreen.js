import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function SearchScreen() {
  const [text, onChangeText] = React.useState("");
  const onPress = () => console.log("Button Pressed")
  return (
    <View style={styles.content}>
      {/* Title */}
      <Text style={styles.title}>Search</Text>
      {/* Search by keywords */}
      <View style={styles.container}>
        <TextInput
          style={styles.input} 
          onChangeText={onChangeText}
          value={text}
          placeholder='Search by keyords'
        />
      </View>
      {/* Type of listing */}
      <Text style={styles.header}>Type of Listing:</Text>
      <View style={styles.container}>

      </View>
      {/* Type of food/drink */}
      <Text style={styles.header}>Type of Food/Drink:</Text>
      <View style={styles.container}>

      </View>
      {/* Price Range */}
      <Text style={styles.header}>Price Range:</Text>
      <View style={styles.container}>

      </View>
      {/* Location */}
      <Text style={styles.header}>Location:</Text>
      <View style={styles.container}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 14,
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 14,
    width: '100%'
  },
  title: {
    fontSize: 40,
  },
  header: {
    fontSize: 28,
  },
  button: {
    backgroundColor: '#FF805E',
    width: 139,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  input: {
    backgroundColor: '#E4E4E4',
    color: '#A0A0A0',
    width: '80%',
    height: 30,
    borderRadius: 10,
    padding: 10
  }
});
