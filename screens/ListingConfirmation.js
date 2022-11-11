import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import CheckBox from '../components/CheckBox';
import RadioButton from '../components/RadioButton'
import PublishButton from '../components/PublishButton';


export default function ListingConfirmation() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Your Listing Has Been Published!</Text>
                <Text style={styles.text}>Strawberry Punnet</Text>
                <Text style={styles.text2}>$2.00 - 20/102 George Street </Text>
                <Text style={styles.expiry}>Expires 25/10/2022</Text>
                <TextInput style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Your listing is now live! Make sure to respond to any
                    requests or messages received from potential buyers in
                    timely manner."
                    placeholderTextColor="#A0A0A0"
                    autoCapitalize="none"
                //onChangeText = {this.handleEmail}
                />
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        paddingHorizontal: 16
    },
    header: {
        width: 390,
        height: 135,
    },
    title: {
        position: "absolute",
        top: 67,
        fontSize: 40,
        left: 16,
        color: '#313131',
        fontWeight: "bold",
    },
    text: {
        position: "absolute",
        top: 177,
        fontSize: 20,
        left: 16,
        color: '#313131',
    },
    text2: {
        position: "absolute",
        top: 215,
        fontSize: 20,
        left: 16,
        color: '#313131',
    },
    expiry: {
        position: "absolute",
        top: 253,
        fontSize: 20,
        left: 16,
        fontWeight: "bold",
        color: '#FF805D',
    },

    content: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 14,
        width: '100%'
    },
    inputTitle: {
        height: 90,
        width: 365,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        position: "absolute",
        top: 291,
        fontSize: 12,
        left: 0,
    }
});
