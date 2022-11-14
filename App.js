import { react } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SearchScreen from './screens/SearchScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import IndividualListingScreen from './screens/IndividualListingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen />
      {/* <SearchResultsScreen /> */}
      {/* <IndividualListingScreen /> */}
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
