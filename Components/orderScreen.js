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
    console.log("16 thi "+JSON.stringify(QRarray))
    console.log("17 thi "+orderNo)
    const [status, setStatus] = React.useState()
    const [flag, setFlag] = React.useState(0)
    useEffect(() => {
        
if(orderNo && flag===1){
    fire.database().ref('Orders').orderByChild('OrderNo').equalTo(orderNo).on('value',snap => {
      let data = snap.val();
      const items = Object.values(data);
      setStatus(items[0].Status);
      })
      setFlag(2)
}
    }, []);
    

        if(flag===0 && orderNo){
        console.log("OR Line 14 " + orderNo + "QRarray : " + QRarray)
        fire.database().ref('Orders').push({
            OrderNo: orderNo,
            QRArray: QRarray,
            Status:'B'
          })
        setFlag(1)
        }

        
    function orderStatus(){
        switch(status) {
            case 'R':
                return(
                <View style={styles.RedNumbDisplay}>
                <Text style={styles.CodeStyle} >{orderNo}</Text>
            </View>)
            case 'B':
                return(
                <View style={styles.BlueNumbDisplay}>
                <Text style={styles.CodeStyle} >{orderNo}</Text>
            </View>)
            case 'G':
                return(
                <View style={styles.GreenNumbDisplay}>
                <Text style={styles.CodeStyle} >{orderNo}</Text>
            </View>)
            default:
                return(
            <View style={styles.NumbDisplay}>
                <Text style={styles.CodeStyle} >Loading</Text>
            </View>)
          }
        
    }      
        
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
        {orderStatus()}
            
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
    BlueNumbDisplay: {
        position: "absolute",
        width: 0.644 * windowWidth,
        height: 0.266 * windowHeight,
        left: 0.178 * windowWidth,
        top: 0.4 * windowHeight,
        backgroundColor:'#0137F4',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center"
    },
    
    RedNumbDisplay: {
        position: "absolute",
        width: 0.644 * windowWidth,
        height: 0.266 * windowHeight,
        left: 0.178 * windowWidth,
        top: 0.4 * windowHeight,
        backgroundColor:'#F42D01',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center"
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
        alignItems: "center",
        justifyContent:"center"
    },
    GreenNumbDisplay: {
        position: "absolute",
        width: 0.644 * windowWidth,
        height: 0.266 * windowHeight,
        left: 0.178 * windowWidth,
        top: 0.4 * windowHeight,
        backgroundColor:'#06F401',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center"
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