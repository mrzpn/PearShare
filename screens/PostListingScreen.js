import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import CheckBox from '../components/CheckBox';
import RadioButton from '../components/RadioButton'
import PublishButton from '../components/PublishButton';
import CameraIconButton from '../components/ImageUploadButton';

export default function PostListingScreen() {
    const [text, onChangeText] = React.useState("");
    const onPress = () => console.log("Button Pressed")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Post A Listing</Text>
                <TextInput style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Title"
                    placeholderTextColor="#A0A0A0"
                    autoCapitalize="none"
                //onChangeText = {this.handleEmail}
                />
                <TextInput style={styles.inputPrice}
                    underlineColorAndroid="transparent"
                    placeholder="$ Price"
                    placeholderTextColor="#A0A0A0"
                    autoCapitalize="none"
                //onChangeText = {this.handleEmail}
                />
                <CameraIconButton src='../assets/camera-icon.png' onPress={() => {}} />
                <TextInput style={styles.inputDescription}
                    underlineColorAndroid="transparent"
                    placeholder="Description"
                    placeholderTextColor="#A0A0A0"
                    autoCapitalize="none"
                    multiline={true}
                //onChangeText = {this.handleEmail}
                />

                <Text style={styles.listingHeader}>Type of Listing:</Text>
                <Text style={styles.typeHeader}>Type of Food/Drink:</Text>
                <Text style={styles.expiryHeader}>Expiry Date:</Text>
                <Text style={styles.locationHeader}>Location:</Text>

                <View style={styles.content}>
                    <View style={styles.options}>
                        <View style={styles.option}>
                            <View style={styles.option}>
                                <RadioButton label="Meat" onPress={onPress} />
                            </View>
                            <View style={styles.option}>
                                <RadioButton label="Fruit & Veg" onPress={onPress} />
                            </View>
                            <View style={[styles.option, { marginLeft: 50 }]}>
                                <RadioButton label='Dairy' onPress={onPress} />
                            </View>
                        </View>

                    </View>
                </View>

                {/* Type of food/drink */}


                <View style={styles.content}>
                    {/* Row 1 */}
                    <View style={styles.options}>
                        <View style={styles.option2}>
                            <CheckBox label="Meat" onPress={onPress} />
                        </View>
                        <View style={styles.option2}>
                            <CheckBox label="Fruit & Veg" onPress={onPress} />
                        </View>
                        <View style={[styles.option2, { marginLeft: 50 }]}>
                            <CheckBox label='Dairy' onPress={onPress} />
                        </View>
                    </View>
                    {/* Row 2 */}
                    <View style={styles.options}>
                        <View style={styles.option2}>
                            <CheckBox label="Carbs" onPress={onPress} />
                        </View>
                        <View style={styles.option2}>
                            <CheckBox label="Confectionary" onPress={onPress} />
                        </View>
                        <View style={[styles.option2, { marginLeft: 50 }]}>
                            <CheckBox label='Other' onPress={onPress} />
                        </View>
                    </View>
                </View>



                <TextInput style={styles.inputExpiry}
                    underlineColorAndroid="transparent"
                    placeholder="DD / MM / YYYY"
                    placeholderTextColor="#A0A0A0"
                    autoCapitalize="none"
                //onChangeText = {this.handleEmail}
                />
                <View style={[styles.estimate, { padding: 0 }]}>
                    <CheckBox label='Tick if estimate' onPress={onPress} />
                </View>


                <TextInput style={styles.inputAddress}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Address..."
                    placeholderTextColor="#A0A0A0"
                    autoCapitalize="none"
                //onChangeText = {this.handleEmail}
                />
                <View style={[styles.current]}>
                    <CheckBox label='Use my current address' onPress={onPress} />
                </View>

                <View style={[styles.publish, { marginVertical: 20 }]}>
                    <PublishButton label='Publish' onPress={onPress} />
                </View>

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

    content: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 14,
        width: '100%'
    },
    options: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        top: 143,
        left: 3

    },
    option2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        top: 313,
        left: 8

    },

    listingHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        position: "absolute",
        top: 271,
        left: 16
    },
    typeHeader: {
        position: "absolute",
        fontSize: 20,
        fontWeight: 'bold',
        top: 363,
        left: 16
    },
    expiryHeader: {
        position: "absolute",
        fontSize: 20,
        fontWeight: 'bold',
        top: 500,
        left: 16
    },
    locationHeader: {
        position: "absolute",
        fontSize: 20,
        fontWeight: 'bold',
        top: 576,
        left: 16
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputTitle: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        position: "absolute",
        top: 120,
        fontSize: 12,
        left: 0,
    },
    inputPrice: {
        height: 40,
        width: 90,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        position: "absolute",
        top: 120,
        fontSize: 12,
        left: 210,
    },
    inputDescription: {
        height: 80,
        width: 350,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        paddingTop:10,
        position: "absolute",
        top: 170,
        fontSize: 12,
        left: 0,
    },

    inputExpiry: {
        position: "absolute",
        height: 30,
        width: 196,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        position: "absolute",
        top: 531,
        fontSize: 12,
        left: 16,
    },
    estimate: {
        position: "absolute",
        width: '100%',
        top: 533,
        left: 227
    },

    inputAddress: {
        position: "absolute",
        height: 30,
        width: 353,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        padding: 10,
        position: "absolute",
        top: 603,
        fontSize: 12,
        left: 16,
    },
    current: {
        position: "absolute",
        width: '100%',
        top: 642,
        left: 20, 
    },

    publish: {
        position: "absolute",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 678
    },
});
