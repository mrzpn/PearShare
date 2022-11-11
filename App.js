import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostListingScreen from './screens/PostListingScreen';
import UploadImage from './screens/UploadImage'; 
import ListingConfirmation from './screens/ListingConfirmation';

export default function App() {
  return (
    <View style={styles.container}>
      <PostListingScreen />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
