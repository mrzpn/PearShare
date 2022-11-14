import { TouchableOpacity, Image} from 'react-native';

const BackButton = (props) => {
  const onPress = props.onPress;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Image 
        style={styles.icon}
        source={require('../assets/back-arrow.png')}
      />
    </TouchableOpacity>
  );
}
export default BackButton;

const styles = {
  button: {
    backgroundColor: '#FF805E',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    position: "absolute",
    top: 75,
    right: 15
  },
}