import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen';
import ViewListingsScreen from './screens/ViewListingsScreen'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <ViewListingsScreen/>
    // <HomeScreen/>
    <SettingsScreen/>
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
