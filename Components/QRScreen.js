import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';


export default function Order({ navigation }) {
    const [state, setState] = useState({ Name: "Oreo", Price: 30, Shop: "Rizvi Market" })
    //assign values to display
    function shouldScan() {
        alert('Scanned');
        //scan and display values;
    }
    function Adder() {
        alert('Item added');
        //adds item for list page;
    }
    function Remover() {
        alert('Cancelled');
        //removes all values displayed;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ToCart}>
                <Image source={require('../assets/ToCart.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <Image source={require('../assets/ScanPanel.png')} style={styles.Scanner}>
            </Image>
            <TouchableOpacity style={styles.ScanBtn} onPress={() => { shouldScan() }}>
                <Image source={require('../assets/ScanBtn.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <ImageBackground source={require('../assets/InfoPanel.png')} style={styles.InfoDisplay}>
                <Text style={styles.CodeStyle1} >Name:{state.Name}</Text>
                <Text style={styles.CodeStyle2} >Price:{state.Price}</Text>
                <Text style={styles.CodeStyle3} >Shop:{state.Shop}</Text>
            </ImageBackground>
            <TouchableOpacity style={styles.AddBtn} onPress={() => { Adder() }}>
                <Image source={require('../assets/AddBtn.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.CancelBtn} onPress={() => { Remover() }}>
                <Image source={require('../assets/CancelBtn.png')} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        "position": "relative",
        "width": 414,
        "height": 896
    },
    Scanner: {
        "position": "absolute",
        "width": 222,
        "height": 232,
        "left": 96,
        "top": 114
    },
    InfoDisplay: {
        "position": "absolute",
        "width": 300,
        "height": 267,
        "left": 57,
        "top": 485
    },
    ToCart: {
        "position": "absolute",
        "width": 89.42,
        "height": 56,
        "left": 309,
        "top": 38
    },
    ScanBtn: {
        "position": "absolute",
        "width": 177.65,
        "height": 64.9,
        "left": 118.29,
        "top": 382.99
    },
    AddBtn: {
        "position": "absolute",
        "width": 133,
        "height": 65,
        "left": 57,
        "top": 789
    },
    CancelBtn: {
        "position": "absolute",
        "width": 133,
        "height": 65,
        "left": 224,
        "top": 789
    },
    CodeStyle1: {
        "position": "absolute",
        "width": 124,
        "height": 69,
        "left": 66,
        "top": 504,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25
    },
    CodeStyle2: {
        "position": "absolute",
        "width": 108,
        "height": 69,
        "left": 66,
        "top": 581,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25
    },
    CodeStyle3: {
        "position": "absolute",
        "width": 112,
        "height": 69,
        "left": 66,
        "top": 669,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25
    }
})