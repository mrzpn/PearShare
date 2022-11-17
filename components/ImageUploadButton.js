import { TouchableOpacity, Image} from 'react-native';

const CameraIconButton = (props) => {
  const onPress = props.onPress;
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Image 
        style={styles.icon}
        source={require('../assets/camera-icon.png')}
      />
    </TouchableOpacity>
  );
}
export default CameraIconButton;

const styles = {
  button: {
    borderColor: '#E4E4E4',
    backgroundColor: '#E4E4E4',
    width: 40,
    height: 40,
    borderRadius: 15,
    position: "absolute",
    top: 132,
    padding: 8,
    left: 320,
  },
}