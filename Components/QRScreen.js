import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import fire from './firebase';
import 'firebase/database';
import 'firebase/auth'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function QRScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrCode, setqrCode] = useState({Code:"RM4",Quant:1});
    const [itemsArray, setItemsArray] = React.useState([{ItemId:"RM",Name: "Please scan an item",Price:"Not Applicable"}]);
    const [savedItems, setSavedItems] = React.useState([]);

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }
    
    useEffect(() => {
        askForCameraPermission();
    }, []);

    //TODO: Improve Scanning
    const handleBarCodeScanned = ({ type, data }) => {
        setqrCode({Code: data,Quant:1})
        fire.database().ref('Items').orderByChild("ItemId").equalTo(qrCode.Code).on('value', snapshot => {
            let data = snapshot.val();
            const items = Object.values(data);
            setItemsArray(items);
        });
        console.log('Line 38 '+ JSON.stringify(qrCode))
    };

    //signout 
    const signOutUser = async () => {
        try{
            await fire.auth().signOut()
            navigation.navigate('Login')
            
        }catch(e){
            console.log('logout')
            console.log(e)
        }
    }

    //assign values to display
   
    function toCart() {
        navigation.navigate("cart", savedItems);
        //scan and display values;
    }
    function Adder() {
        setScanned(false);
        console.log('Line 61 ' + JSON.stringify(itemsArray));
        if(itemsArray[0].ItemId){
            if(savedItems.some(item => item.Code === itemsArray[0].ItemId)){
                alert("Item already exists in the cart!")
            }
            else{
                savedItems.push({Code : itemsArray[0].ItemId,Quant: 1});}
            }
        
        console.log('Line 63 ' + JSON.stringify(savedItems))
        setItemsArray([{ "Name": "", "Price": "" }]);
        //adds item for list page;
    }
    function Remover() {
        setScanned(false);
        setItemsArray([{ "Name": "", "Price": "" }]);
        //removes all values displayed;
    }
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
    }
    return (
        <ImageBackground source={require('../assets/cartbackground.png')} style={styles.bgimage} >
        <View style={styles.container}>
            <View >
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.Scanner} />
            </View>
            <TouchableOpacity style={styles.ToCart} onPress={() => { toCart() }}>
                <Image source={require('../assets/ToCart.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutbtn} onPress={() => signOutUser()} >
                <Image source={require('../assets/logoutbtn.png')} style={{resizeMode: 'contain', width: '100%', height: '100%'}} />
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
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    bgimage: {
        position: "relative",
        resizeMode:'contain',
        "width": windowWidth,
        "height": 1.2 * windowHeight
      },
    logoutbtn: {
        "position": "absolute",
        "width": 0.09 * windowWidth,
        "height":  0.05 * windowHeight,
        "left": 20/414 * windowWidth,
        "top": 50/896 * windowHeight
      },  
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
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }

})