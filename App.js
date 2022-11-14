import { react } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
              iconName = focused ? 'ios-add' : 'ios-add-outline';

            } else if (route.name === 'Listings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';

            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
            
            } else if (route.name === 'Register') {
              iconName = focused ? 'ios-person-add' : 'ios-person-add-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {loggedIn ? (
          <>
            {/* TODO: fix routes once implemented */}
            <Tab.Screen name="Explore" options={{headerShown: false}} component={RegisterScreen} />
            <Tab.Screen name="Search" options={{headerShown: false}} component={RegisterScreen} />
            <Tab.Screen name="Post" options={{headerShown: false}} component={RegisterScreen} />
            <Tab.Screen name="Listings" options={{headerShown: false}} component={RegisterScreen} />
            <Tab.Screen name="Settings" options={{headerShown: false}} component={RegisterScreen} />
          </>
        ) : (
          <>
            {/* don't show other options if user is not logged in  */}
            <Tab.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
            <Tab.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />
          </> 
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}