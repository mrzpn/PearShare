import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch} from "react-native";
// style sheet
import {containers} from '../styles/Global';

// Profile
import jessica from '../assets/Jessica.png'

export default function SettingsScreen() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(previousState => !previousState);
  };

  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleVibrations = () => setIsEnabled1(previousState => !previousState);
  const toggleVoice = () => setIsEnabled2(previousState => !previousState);
  
return (
  <View style={[{backgroundColor: theme ? '#313131' : '#fff'}, styleContainers.container]}>
    <View style={containers.header}>
      <Text style={[{color: theme ? 'white' : '#313131'}, styleFonts.title]}>Settings</Text>
    </View>
    <View style={styleContainers.profilePicture}>
      <Image source={jessica} style={{width: 235, height: 235, borderRadius: 200, backgroundColor: "green", alignSelf: 'center'}}/>
    </View>
    <View style={[{color: theme ? 'white' : '#313131'}, styleContainers.profileName]}>
      <Text style={[{color: theme ? 'white' : '#313131'}, styleFonts.profileFont]}>Jessica Huang</Text>
    </View>
    <View style={styleContainers.header}>
      <Text style={[{color: theme ? 'white' : '#313131'}, styleFonts.settingsFont]}>ACCESSIBILITY SETTINGS</Text>
      <View style={{ borderBottomColor: theme? '#fff' : '#313131', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
    </View>
    <View style={styleContainers.settingsContainer}>
      <View style={styleContainers.settings}>
        <Text style={[{color: theme ? 'white' : '#313131'}, styleFonts.settingsFont]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#313131", true: "#bbbbbb" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={theme => toggleTheme(theme)}
            value={theme}
          />
      </View>
      <View style={styleContainers.settings}>
        <Text style={[{color: theme ? 'white' : '#313131'}, styleFonts.settingsFont]}>Vibrations</Text>
        <Switch
          trackColor={{ false: "#313131", true: "#bbbbbb" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVibrations}
          value={isEnabled1}
        />
       </View>
       <View style={styleContainers.settings}>
         <Text style={[{color: theme ? 'white' : '#313131'}, styleFonts.settingsFont]}>Voice Over</Text>
         <Switch
          trackColor={{ false: '#313131', true: '#bbbbbb' }}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleVoice}
          value={isEnabled2}
        />
      </View>
    </View>
    <View style={styleContainers.header}>
      <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>PROFILE SETTINGS</Text>
      <View style={{ borderBottomColor: theme? '#fff' : '#313131', borderBottomWidth: StyleSheet.hairlineWidth}}></View>
    </View>
    <View style={styleContainers.settingsContainer}>
        <View style={styleContainers.settings}>
          <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>Email</Text>
          <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>JHuang123@gmail.com</Text>
        </View>
        <View style={styleContainers.settings}>
          <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>Display Name</Text>
          <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>Jessica Huang</Text>
        </View>
        <View style={styleContainers.settings}>
          <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>Password</Text>
          <Text style={[{color: theme ? 'white' : 'black'}, styleFonts.settingsFont]}>a***_*****</Text>
        </View>
    </View>
  </View>
);
}

const styleContainers = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    paddingHorizontal: 16
  },
  profilePicture: {
      width: "100%",
      height: 235,
    },
    profileName: {
      width: "100%",
      height: 60,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      width: "100%",
      height: 55,
      paddingTop: 25,
    },
    settingsContainer: {
      width: "100%",
      height: 120,
      justifyContent: "space-between",
    },
    settings: {
      width: "100%",
      height: 30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
});

const styleFonts = StyleSheet.create({
  title: {
    position: "absolute",
    top: 67,
    fontSize: 40,
    fontWeight: "bold",
  },
  profileFont: {
    fontSize: 25,
    fontWeight: "500",
  },
  settingsFont: {
    fontSize: 15,
  },
});