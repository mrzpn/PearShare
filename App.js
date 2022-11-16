import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// import screens
// TODO: link remaining screens
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ViewListingsScreen from './screens/ViewListingsScreen';
import SearchScreen from './screens/SearchScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import IndividualListingScreen from './screens/IndividualListingScreen'
/* 
import PostListingScreen from './screens/PostListingScreen';
*/

const RegisterTab = createBottomTabNavigator();
const HomeTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RegisterLogin() {
  return (
    <RegisterTab.Navigator {...{screenOptions}}>
      <RegisterTab.Screen name="Register" component={RegisterScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-person-add'} size={30} color={color} />;
        },
      }}/>
      <RegisterTab.Screen name="Login" component={LoginScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-log-in'} size={30} color={color} />;
        },
      }}/>
    </RegisterTab.Navigator>
  );
}

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 100,
  },
  tabBarActiveTintColor: 'black',
}

function Home() {
  return (
    <HomeTab.Navigator {...{screenOptions}}>
      <HomeTab.Screen name="Explore" component={HomeScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-home'} size={20} color={color} />;
        },
      }}/>
      <HomeTab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-search'} size={20} color={color} />;
        },
      }}/>
      <HomeTab.Screen name="Post" component={HomeScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-add'} size={45} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
      }}/>
      <HomeTab.Screen name="Listings" component={ViewListingsScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-list'} size={20} color={color} />;
        },
      }}/>
      <HomeTab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({color}) => {
          return <Ionicons name={'ios-settings'} size={20} color={color} />;
        },
      }}/>
    </HomeTab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RegisterLogin" component={RegisterLogin}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
