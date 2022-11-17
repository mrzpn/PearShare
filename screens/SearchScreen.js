import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { containers, fonts  } from '../styles/Global';
import CheckBox from '../components/CheckBox';
import RadioButton from '../components/RadioButton';
import SearchBar from '../components/SearchBar';
import OrangeButton from '../components/OrangeButton';

export default function SearchScreen({navigation}) {
  const [text, onChangeText] = React.useState("");
  const [min, onChangeMin] = React.useState("");
  const [max, onChangeMax] = React.useState("");
  const [filter, setFilter] = React.useState(false);


  return (
    <View style={[containers.container, {alignItems: 'flex-start'}]}>
      <View style={[containers.header]}>
        {/* Title */}
        <Text style={fonts.title}>Search</Text>
      </View>
      {/*Here we will return the view when state is true 
        and will return false if state is false*/}
      {filter ?
      (
        <>
          <View style={[{flexDirection: 'row', justifyContent: 'center'}, styles.topRightCorner]}>
            <OrangeButton label="Search by Keywords" onPress={() => setFilter(!filter)} />
          </View>
          {/* Type of listing */}
          <Text style={styles.header}>Type of Listing:</Text>
          <View style={styles.content}>
          <View style={styles.options}>
              <View style={styles.option}>
                <RadioButton label="Donation" onPress={() => {}} />
              </View>
              <View style={[styles.option, {marginLeft: 50}]}>
                <RadioButton label="Exchange" onPress={() => {}} />
              </View>
              <View style={[styles.option, {marginLeft: 50}]}>
                <RadioButton label='Sell' onPress={() => {}} />
              </View>
            </View>  
          </View>
          {/* Type of food/drink */}
          <Text style={styles.header}>Type of Food/Drink:</Text>
          <View style={styles.content}>
            {/* Row 1 */}
            <View style={styles.options}>
              <View style={styles.option}>
                <CheckBox label="Meat" onPress={() => {}} />
              </View>
              <View style={styles.option}>
                <CheckBox label="Fruit & Veg" onPress={() => {}} />
              </View>
              <View style={[styles.option, {marginLeft: 50}]}>
                <CheckBox label='Dairy' onPress={() => {}} />
              </View>
            </View>        
            {/* Row 2 */}
            <View style={styles.options}>
              <View style={styles.option}>
                <CheckBox label="Carbs" onPress={() => {}} />
              </View>
              <View style={styles.option}>
                <CheckBox label="Confectionary" onPress={() => {}} />
              </View>
              <View style={[styles.option, {marginLeft: 50}]}>
                <CheckBox label='Other' onPress={() => {}} />
              </View>
            </View>        
              
          </View>
          {/* Price Range */}
          <Text style={styles.header}>Price Range:</Text>
          <View style={[styles.container, {justifyContent: "space-evenly"}]}>
            <TextInput style={[styles.input, {left: -15}]} value={min} onChangeText={onChangeMin} placeholder={'Minimum Price'} />
            <TextInput style={[styles.input, {left: -25}]} value={max} onChangeText={onChangeMax} placeholder={'Maximum Price'} />
          </View>
          {/* Location */}
          <Text style={styles.header}>Location:</Text>
          <View style={[styles.container]}>
            <SearchBar label='Enter address' onChangeText={onChangeText} />
          </View>
          <View style={{padding: 10}}>
            <CheckBox label='Use my address' onPress={() => {}} />
          </View>
          {/* Search by Filter Button */}
          <View style={[styles.center, {marginVertical: 20}]}>
            <OrangeButton label='Search' onPress={() => navigation.navigate("Result")} />
          </View>
        </>
      ) : (
        <>
          <View style={[{flexDirection: 'row', justifyContent: 'center'}, styles.topRightCorner]}>
            <OrangeButton label="Search by Filter" onPress={() => setFilter(!filter)} />
          </View>
          {/* Search by keywords */}
          <View style={[styles.container]}>
            <SearchBar label='Search by keywords' onChangeText={onChangeText} />
            <TouchableOpacity
              style={styles.circle}
              onPress={() => navigation.navigate("Result")}
            >
              <Image 
                style={styles.icon}
                source={require('../assets/search-icon.png')}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
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
    alignItems: 'center',
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
    alignItems: 'center',
    marginTop: 10
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1
  },
  input: {
    backgroundColor: '#E4E4E4',
    color: '#A0A0A0',
    width: '42%',
    height: 30,
    borderRadius: 10,
    padding: 10
  },
  topRightCorner: {
    position: 'absolute',
    right: 20,
    top: 75
  }
});
