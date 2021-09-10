import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function Order({ navigation }) {
    const [state, setState] = useState({ orderNo: 0 })
    //assign orderNo the value coming from cart page
    function ordrPlaced() {
        alert('Order Placed');
        //send order no to admin side;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.OrderNumber}>Order Number:</Text>
            <ImageBackground source={require('../assets/Rectangle10.png')} style={styles.NumbDisplay}>
                <Text style={styles.CodeStyle} >{state.orderNo}</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.Button1Style}
                onPress={() => { ordrPlaced() }}>
                <Image source={require('../assets/OdrBtn.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button2Style} >
                <Image source={require('../assets/ReceivedBtn.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    OrderNumber: {
        position: "absolute",
        width: 151,
        height: 25,
        left: 45,
        top: 60,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 20,
        lineHeight: 25
    },
    NumbDisplay: {
        position: "absolute",
        width: 267,
        height: 238,
        left: 45,
        top: 100,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "solid",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button1Style: {
        position: "absolute",
        width: 177.65,
        height: 64.9,
        left: 95,
        top: 370,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button2Style: {
        position: "absolute",
        width: 177.65,
        height: 64.9,
        left: 95,
        top: 450,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CodeStyle: {
        position: "absolute",
        width: 214,
        height: 125,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 100,
        lineHeight: 125
    }
})