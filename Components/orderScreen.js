import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Order({ navigation,route }) {
    const [state, setState] = React.useState(route.params ? route.params : null);
    //assign orderNo the value coming from cart page
    function ordrPlaced() {
        alert('Order Placed');
        //send order no to admin side;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.OrderNumber}>Order Number:</Text>
            <View style={styles.NumbDisplay}>
                <Text style={styles.CodeStyle} >{state}</Text>
            </View>
            <TouchableOpacity style={styles.Button1Style}
                onPress={() => { ordrPlaced() }}>
                <Image source={require('./../assets/OdrBtn.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button2Style}
                onPress={() => { navigation.navigate("ThankyouPage") }} >
                <Image source={require('./../assets/ReceivedBtn.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        "position": "relative",
        "width": windowWidth,
        "height": windowHeight,
    },
    OrderNumber: {
        position: "absolute",
        left: 0.178 * windowWidth,
        top: 0.237 * windowHeight,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 20,
        lineHeight: 25
    },
    NumbDisplay: {
        position: "absolute",
        width: 0.644 * windowWidth,
        height: 0.266 * windowHeight,
        left: 0.178 * windowWidth,
        top: 0.304 * windowHeight,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "solid",
        borderRadius: 25,
        alignItems: "center"
    },
    Button1Style: {
        position: "absolute",
        width: 0.429 * windowWidth,
        height: 0.072 * windowHeight,
        left: 0.285 * windowWidth,
        top: 0.646 * windowHeight,
    },
    Button2Style: {
        position: "absolute",
        width: 0.429 * windowWidth,
        height: 0.072 * windowHeight,
        left: 0.285 * windowWidth,
        top: 0.757 * windowHeight,
    },
    CodeStyle: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 100,
        lineHeight: 125
    }
})