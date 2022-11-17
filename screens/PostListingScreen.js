import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { containers, fonts  } from '../styles/Global';
import DateTimePicker from '@react-native-community/datetimepicker';

import CameraIconButton from '../components/ImageUploadButton';
import CheckBox from '../components/CheckBox';
import PublishButton from '../components/PublishButton';
import RadioButton from '../components/RadioButton'

export default function PostListingScreen() {
    const [text, onChangeText] = React.useState("");
    let currDate = new Date()
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(currDate));

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
    const onPress = () => console.log("Button Pressed");
    
    return (
      <View style={containers.container}>
        <View style={containers.header}>
          <Text style={fonts.title}>Post A Listing</Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.titlePrice}>
            <View style={styles.title}>
              <TextInput style={styles.inputTitle} {...fieldStyle} placeholder="Title..."/>
            </View>
            <View style={styles.price}>
              <TextInput style={styles.inputPrice} {...fieldStyle} placeholder="$ Price..."/>
            </View>
            <View style={styles.camera}>
              <CameraIconButton src='../assets/camera-icon.png' onPress={() => {}} />
            </View>
          </View>
          <View style={styles.description}>
            <TextInput style={styles.inputDescription} {...fieldStyle} placeholder="Description..." multiline={true}/>
          </View>
          <View style={styles.typeofListing}>
            <Text style={styles.subtitle}>Type of Listing: </Text>
              <View style={styles.options}>
                  <View style={styles.option}>
                    <View style={styles.option}>
                        <RadioButton label="Donation" onPress={onPress} />
                    </View>
                    <View style={[styles.option, { marginLeft: 20 }]}>
                        <RadioButton label="Exchange" onPress={onPress} />
                    </View>
                    <View style={[styles.option, { marginLeft: 20 }]}>
                        <RadioButton label='Sell' onPress={onPress} />
                    </View>
                </View>
            </View>
          </View>
          <View style={styles.typeofFood}>
            <Text style={styles.subtitle}>Type of Food/Drink:</Text>
                {/* Row 1 */}
              <View style={styles.optionFoodDrink}>
                <View style={styles.optionFood}>
                  <CheckBox label="Meat" onPress={onPress} />
                </View>
                <View style={styles.optionFood}>
                  <CheckBox label="Fruit & Veg" onPress={onPress} />
                </View>
                <View style={[styles.optionFood, { marginLeft: 50 }]}>
                  <CheckBox label='Dairy' onPress={onPress} />
                </View>
              </View>
                {/* Row 2 */}
              <View style={styles.optionFoodDrink}>
                <View style={styles.optionFood}>
                  <CheckBox label="Carbs" onPress={onPress} />
                </View>
                <View style={styles.optionFood}>
                  <CheckBox label="Confectionary" onPress={onPress} />
                </View>
                <View style={[styles.optionFood, { marginLeft: 50 }]}>
                  <CheckBox label='Other' onPress={onPress} />
                </View>
              </View>
          </View>
          <View style={styles.expiry}>
            <Text style={styles.subtitle}>Expiry Date:</Text>
              <View style={{marginRight: 135, marginTop: 5, width: 150}}>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              </View>         
          </View>
          <View style={styles.location}>
            <Text style={styles.subtitle}>Location:</Text>
            <TextInput style={styles.inputLong} {...fieldStyle} placeholder="Location..."/>
          </View>
          <View style={[styles.current]}>
            <CheckBox label='Use my current address' onPress={onPress} />
          </View>
          <View style={[styles.publish, { marginVertical: 20 }]}>
            <PublishButton label='Publish' onPress={onPress} />
          </View>
        </View>
      </View>
    );
}

const fieldStyle = (props) => {
  underlineColorAndroid="transparent"
  placeholderTextColor="#A0A0A0"
  autoCapitalize="none"
}

const styles = StyleSheet.create({    
  inputsContainer: {
    width: "100%",
    height: 200,
  },
  titlePrice: {
    width: "100%",
    height: 40,
    flexDirection: "row",
  },
  title: {
    flex: 5,
  },
  price: {
    flex: 2, 
  },
  camera: {
    flex: 1,
  },
  description: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  typeofListing: {
    width: "100%",
    height: 80,
    paddingBottom: 5,
    justifyContent: "space-between",
  },
  typeofFood: {
    width: "100%",
    height: 140,
    paddingBottom: 10,
  },
  expiry: {
    width: "100%",
    paddingTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    width: "100%",
    height: 100,
    paddingTop: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  option2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  optionFoodDrink: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  optionFood: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  inputTitle: {
    height: 40,
    width: "95%",
    alignSelf: "flex-start",
    backgroundColor: '#E4E4E4',
    padding: 10,
    borderRadius: 15,
    borderColor: '#E4E4E4',
    fontSize: 12,
  },
  inputPrice: {
    height: 40,
    width: "90%",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E4E4E4',
    backgroundColor: '#E4E4E4',
    padding: 10,
    fontSize: 12,
  },
  inputDescription: {
    height: "95%",
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
    paddingTop: 10,
    padding: 10,
    borderColor: '#E4E4E4',
    backgroundColor: '#E4E4E4',
    fontSize: 12,
    textAlignVertical: 'top'
  },
  inputLong: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#E4E4E4',
    backgroundColor: '#E4E4E4',
    fontSize: 12,
  },
  current: {
    width: '100%',
    paddingTop: 5,
  },
  publish: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
});
