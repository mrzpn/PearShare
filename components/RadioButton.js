import BouncyCheckbox from "react-native-bouncy-checkbox";

const RadioButton = (props) => {
  const label = props.label;
  const onPress = props.onPress;
  return (
    <BouncyCheckbox
        size={25}
        fillColor="#FF805E"
        unfillColor="#FFFFFF"
        text={label}
        iconStyle={{ borderColor: "red"}}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ textDecorationLine: 'none' }}
        onPress={(isChecked) => {onPress}}
    />
  );
}
export default RadioButton;
