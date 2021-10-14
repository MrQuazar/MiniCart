import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

import fire from './firebase';
import 'firebase/database'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Order({ navigation,route }) {
    const {orderNo} = route.params
    const {QRarray} = route.params
    const [orderNum, setOrderNum] = React.useState(orderNo ? orderNo : null);
    const [QRArray, setQRArray] = React.useState(QRarray ? QRarray : [])
    console.log("16 thi "+JSON.stringify(QRarray))
    console.log("17 thi "+orderNo)
    const [status, setStatus] = React.useState()
    

        
        console.log("OR Line 14 " + orderNo + "QRarray : " + QRarray)
        fire.database().ref('Orders').push({
            OrderNo: orderNo,
            QRArray: QRarray,
            Status:'B'
          });
          fire.database().ref('TestOrders').orderByChild('OrderNo').equalTo(orderNo).on('value',snap => {
            snap.forEach((child => {setStatus(child.Status)
                console.log(status)
                console.log(child.Status)
            }))
        })
        
          
        
    console.log(status)
    //assign orderNo the value coming from cart page
    function ordrPlaced() {
        alert('Order Placed');
        //send order no to admin side;
    }
    return (
        <ImageBackground source={require('../assets/orderbackground.png')} style={styles.bgimage} >
        <View style={styles.container}>
            <Image source={require('../assets/info.png')} style={styles.infoStyle} />    
            <Text style={styles.OrderNumber}>Order Number:</Text>
            <View style={styles.NumbDisplay}>
                
                <Text>{status}</Text>
                <Text style={styles.CodeStyle} >{orderNum}</Text>
            </View>
            
            <TouchableOpacity style={styles.Button2Style}
                onPress={() => { navigation.navigate("ThankyouPage") }} >
                <Image source={require('./../assets/ReceivedBtn.png')} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
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
        "height": windowHeight
      },  
    container: {
        "position": "relative",
        "width": windowWidth,
        "height": windowHeight,
    },
    infoStyle:{
        "position": "absolute",
        "width": 369/414 * windowWidth,
        "height": 88/896 * windowHeight,
        "left": 22/414 * windowWidth,
        "top": 92/896 * windowHeight
    },    
    OrderNumber: {
        "position": "absolute",
        "width": 164/414 * windowWidth,
        "height": 25/896 * windowHeight,
        "left": 74/414 * windowWidth,
        "top": 300/896 * windowHeight,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 20,
         color:'white',
        "lineHeight": 25
        
    },
    NumbDisplay: {
        position: "absolute",
        width: 0.644 * windowWidth,
        height: 0.266 * windowHeight,
        left: 0.178 * windowWidth,
        top: 0.4 * windowHeight,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 25,
        alignItems: "center"
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