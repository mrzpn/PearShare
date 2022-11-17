import { Text,TouchableOpacity} from 'react-native';

const PublishButton = (props) => {
  const label = props.label;
  const onPress = props.onPress;
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{color: '#313131'}}>{label}</Text>
    </TouchableOpacity>
  );
}
export default PublishButton;

const styles = {
  button: {
    backgroundColor: '#FFEFC4',
    width: 139,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
}