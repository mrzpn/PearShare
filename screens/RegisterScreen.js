import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider } from 'native-base';
import { fonts } from '../styles/Global'

function RegisterScreen({navigation}) {
    return (
        <NativeBaseProvider>
            <View style={styles.mainContainer}>
                <Text style={fonts.titleWelcome}>Welcome to</Text>
                <Image style={styles.logoImage} source={require('../assets/logoExclaim.png')} />
                <Text style={fonts.titleLogin}>Register</Text>
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
                    placeholder="Email"
                    variant="filled"
                    _light={{
                        placeholderTextColor: 'blueGray.400',
                    }}
                    size="lg"
                    mt={4}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    variant="filled"
                    _light={{
                        placeholderTextColor: 'blueGray.400',
                    }}
                    size="lg"
                    mt={4}
                />
                <Input
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    variant="filled"
                    _light={{
                        placeholderTextColor: 'blueGray.400',
                    }}
                    size="lg"
                    mt={4}
                />
                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
         </NativeBaseProvider>
    );
}

export default RegisterScreen;

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
        marginTop: -200,
    },
    heading: {
        width: "100%",
        height: 135,
    },
    logoImage: {
        width: 200,
        height: 60,
        marginTop: 120,
        marginBottom: 0,
    },
    registerButton: {
        backgroundColor: '#FF805E',
        borderRadius: 10,
        margin: 15,
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
});