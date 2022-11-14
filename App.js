import { react } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// TODO: replace RegisterScreen with other screen imports
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ViewListingsScreen from './screens/ViewListingsScreen';
/*
import LoginScreen from './screens/LoginScreen';
import PostListingScreen from './screens/PostListingScreen';
import SearchScreen from './screens/SearchScreen';
*/


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';

            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';

            } else if (route.name === 'Post') {
              // TODO: use non-ionicon library to find better icon?
              iconName = focused ? 'ios-add' : 'ios-add-outline';

            } else if (route.name === 'Listings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';

            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* TODO: fix routes once implemented */}
        <Tab.Screen name="Explore" options={{headerShown: false}} component={HomeScreen} />
        <Tab.Screen name="Search" options={{headerShown: false}} component={RegisterScreen} />
        <Tab.Screen name="Post" options={{headerShown: false}} component={RegisterScreen} />
        <Tab.Screen name="Listings" options={{headerShown: false}} component={ViewListingsScreen} />
        <Tab.Screen name="Settings" options={{headerShown: false}} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}