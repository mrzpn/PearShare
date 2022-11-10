import {TextInput} from 'react-native';

const SearchBar = (props) => {
  const label = props.label;
  const onChangeText = props.onChangeText;
  const text = props.text;
  return (
    <TextInput
      style={styles.input} 
      onChangeText={onChangeText}
      value={text}
      placeholder={label}
    />
  );
}
export default SearchBar;

const styles = {
  input: {
    backgroundColor: '#E4E4E4',
    color: '#A0A0A0',
    width: '90%',
    height: 30,
    borderRadius: 10,
    padding: 10
  },
}