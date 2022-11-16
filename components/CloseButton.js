import { TouchableOpacity, Image} from 'react-native';

const CloseButton = (props) => {
  const onPress = props.onPress;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Image 
        style={styles.icon}
        source={require('../assets/cross.png')}
      />
    </TouchableOpacity>
  );
}
export default CloseButton;

const styles = {
  button: {
    backgroundColor: '#FF805E',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
}