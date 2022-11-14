import { react } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

import { loggedIn } from './screens/RegisterScreen';

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
        {loggedIn ? (
          <>
            {/* TODO: fix routes once implemented */}
            <Tab.Screen name="Explore" component={RegisterScreen} />
            <Tab.Screen name="Search" component={RegisterScreen} />
            <Tab.Screen name="Post" component={RegisterScreen} />
            <Tab.Screen name="Listings" component={RegisterScreen} />
            <Tab.Screen name="Settings" component={RegisterScreen} />
          </>
        ) : (
          <>
            {/* don't show other routes if user is not logged in  */}
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Register" component={RegisterScreen} />
          </> 
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}