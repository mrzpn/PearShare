import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import { Input, NativeBaseProvider, Link } from 'native-base';
import { fonts } from '../styles/Global';

function Login() {
    return (
        <NativeBaseProvider>
            <View style={styles.mainContainer}>
                <Image style={styles.logoImage} source={require('../assets/logoRegular.png')} />
                <Text style={fonts.titleLogin}>Login</Text>
            </View>

            <View style={styles.formContainer}>
                <Input
                    placeholder="Username"
                    variant="filled"
                    _light={{
                        placeholderTextColor: 'blueGray.400',
                    }}
                    size="lg"
                    mt={4}
                />
                <Input
                    placeholder="Password"
                    variant="filled"
                    _light={{
                        placeholderTextColor: 'blueGray.400',
                    }}
                    size="lg"
                    mt={4}
                />
                {/* TODO: login button navigates to homepage */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    );
}

export default () => {
    return (
        <NativeBaseProvider>
            <Login />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        marginTop: 67,
    },
    formContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: -180,
    },
    heading: {
        width: "100%",
        height: 135,
    },
    logoImage: {
        width: 200,
        height: 60,
        marginTop: 100,
        marginBottom: 0,
    },
    loginButton: {
        backgroundColor: '#FF805E',
        borderRadius: 10,
        padding: 15,
        margin: 15,
        width: 100,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    signUpText: {
        color: 'black',
        fontSize: 8,
        marginTop: 10,
    },
});