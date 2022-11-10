import { react } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = (props) => {
  const label = props.label;
  const onPress = props.onPress;
  return (
    <BouncyCheckbox
        size={25}
        fillColor="#FF805E"
        unfillColor="#FFFFFF"
        text={label}
        iconStyle={{ borderColor: "red", borderRadius: 5}}
        innerIconStyle={{ borderWidth: 2, borderRadius: 5 }}
        textStyle={{ textDecorationLine: 'none' }}
        onPress={(isChecked) => {onPress}}
    />
  );
}
export default Checkbox;
