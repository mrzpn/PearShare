import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

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
        <TouchableOpacity
          style={styles.circle}
          onPress={onPress}
        >
          <Image 
            style={styles.icon}
            source={require('../assets/search-icon.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Line Separator */}
      <View style={styles.center}>
        <View style={styles.line} />
        <View>
          <Text style={{width: 50, textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#BDBDBD'}}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      {/* Type of listing */}
      <Text style={styles.header}>Type of Listing:</Text>
      <View style={styles.content}>
      </View>
      {/* Type of food/drink */}
      <Text style={styles.header}>Type of Food/Drink:</Text>
      <View style={styles.content}>
        {/* Row 1 */}
        <View style={styles.options}>
          <View style={styles.option}>
            <BouncyCheckbox
              size={25}
              fillColor="#FF805E"
              unfillColor="#FFFFFF"
              text="Meat"
              iconStyle={{ borderColor: "red", borderRadius: 5}}
              innerIconStyle={{ borderWidth: 2, borderRadius: 5 }}
              textStyle={{ textDecorationLine: 'none' }}
              onPress={(isChecked) => {}}
            />
          </View>
          <View style={styles.option}>
            <BouncyCheckbox
              size={25}
              fillColor="#FF805E"
              unfillColor="#FFFFFF"
              text="Fruit & Veg"
              iconStyle={{ borderColor: "red", borderRadius: 5}}
              innerIconStyle={{ borderWidth: 2, borderRadius: 5 }}
              textStyle={{ textDecorationLine: 'none' }}
              onPress={(isChecked) => {}}
            />
          </View>
          <View style={styles.option}>
            <BouncyCheckbox
              size={25}
              fillColor="#FF805E"
              unfillColor="#FFFFFF"
              text="Dairy"
              iconStyle={{ borderColor: "red", borderRadius: 5}}
              innerIconStyle={{ borderWidth: 2, borderRadius: 5 }}
              textStyle={{ textDecorationLine: 'none' }}
              onPress={(isChecked) => {}}
            />
          </View>
        </View>        
      </View>
      {/* Price Range */}
      <Text style={styles.header}>Price Range:</Text>
      <View style={styles.container}>

      </View>
      {/* Location */}
      <Text style={styles.header}>Location:</Text>
      <View style={styles.container}>

      </View>
      {/* Search by Filter Button */}
      <View style={styles.center}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={{color: '#FFFFFF'}}>Search</Text>
      </TouchableOpacity>
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
    padding: 10,
    width: '100%'
  },
  center: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#FF805E',
    width: 139,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#E4E4E4',
    color: '#A0A0A0',
    width: '90%',
    height: 30,
    borderRadius: 10,
    padding: 10
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16
  },
  icon: {
    width: 20,
    height: 20
  },
  line: {
    flex: 1, 
    height: 1, 
    backgroundColor: '#BDBDBD'
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  option: {
    width: '30%'
  }
});
