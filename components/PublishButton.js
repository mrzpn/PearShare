import { Text,TouchableOpacity} from 'react-native';

const PublishButton = (props) => {
  const label = props.label;
  const onPress = props.onPress;
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  );
}
export default PublishButton;

const styles = {
  button: {
    backgroundColor: '#FF805E',
    width: 139,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
}