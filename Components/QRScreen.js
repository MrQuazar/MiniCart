import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

import fire from './firebase';
import 'firebase/database'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Order({ navigation }) {
    const [state, setState] = useState({ Name: "Oreo", Price: 30, Shop: "Rizvi Market" })
    const [qrCode, setqrCode] = useState("RM2")
    const [itemsArray, setItemsArray] = React.useState([]);

    React.useEffect(() => {
        fire.database().ref('Items').orderByChild("ItemId").equalTo(qrCode).on('value', snapshot => {
            let data = snapshot.val();
            const items = Object.values(data);
            setItemsArray(items);
        });
    }, []);

    console.log(itemsArray)
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
    if (!itemsArray) { return (<Text>The page is loading</Text>) }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.ToCart} onPress={() => navigation.navigate("cart")}>
                <Image source={require('../assets/ToCart.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <View style={styles.Scanner}>
                <Image source={require('../assets/ScanPanel.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </View>
            <TouchableOpacity style={styles.ScanBtn} onPress={() => { shouldScan() }}>
                <Image source={require('../assets/ScanBtn.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <View>
                {itemsArray.map((item, index) => {
                    return (
                        <View key={index} style={styles.InfoDisplay}>
                            <Text style={styles.CodeStyle1} >Name:{item.Name}</Text>
                            <Text style={styles.CodeStyle2} >Price:{item.Price}</Text>
                        </View>
                    );
                })}
            </View>
            <TouchableOpacity style={styles.AddBtn} onPress={() => { Adder() }}>
                <Image source={require('../assets/AddItemBtn.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.CancelBtn} onPress={() => { Remover() }}>
                <Image source={require('../assets/CancelBtn.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
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
    Scanner: {
        "position": "absolute",
        "width": 0.536 * windowWidth,
        "height": 0.258 * windowHeight,
        "left": 0.231 * windowWidth,
        "top": 0.126 * windowHeight
    },
    InfoDisplay: {
        "position": "absolute",
        "width": 0.724 * windowWidth,
        "height": 0.297 * windowHeight,
        "left": 0.137 * windowWidth,
        "top": 0.541 * windowHeight,
        borderWidth: 1,
        borderRadius: 10,
        color: "white"
    },
    ToCart: {
        "position": "absolute",
        "width": 0.155 * windowWidth,
        "height": 0.0925 * windowHeight,
        "left": 0.746 * windowWidth,
        "top": 0.04 * windowHeight
    },
    ScanBtn: {
        "position": "absolute",
        "width": 0.2841 * windowWidth,
        "height": 0.0724 * windowHeight,
        "left": 0.34 * windowWidth,
        "top": 0.427 * windowHeight
    },
    AddBtn: {
        "position": "absolute",
        "width": 0.321 * windowWidth,
        "height": 0.0725 * windowHeight,
        "left": 0.137 * windowWidth,
        "top": 0.88 * windowHeight
    },
    CancelBtn: {
        "position": "absolute",
        "width": 0.321 * windowWidth,
        "height": 0.0725 * windowHeight,
        "left": 0.541 * windowWidth,
        "top": 0.88 * windowHeight
    },
    CodeStyle1: {
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25,
        paddingLeft: 10,
        paddingTop: 10,
    },
    CodeStyle2: {
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25,
        paddingLeft: 10,
        paddingTop: 10,
    },
    CodeStyle3: {
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
        "lineHeight": 25,
        paddingLeft: 10,
        paddingTop: 10,
    }
})