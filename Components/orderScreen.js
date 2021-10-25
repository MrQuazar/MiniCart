import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity,Alert } from 'react-native';
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
                {Alert.alert("Your order is ready!")}
            </View>)
            default:
                return(
            <View style={styles.NumbDisplay}>
                <Text style={styles.CodeStyle} >Load..</Text>
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
            
      <View style={styles.infoDisplay}>
      <Image source={require('./../assets/blue.png')} style={{left: (12 / 414) * windowWidth, top: (6/ 896) * windowHeight,width: (17 / 414) * windowWidth, height: (17 / 896) * windowHeight,}} />
      <Image source={require('./../assets/red.png')} style={{left: (12 / 414) * windowWidth, top: (20/ 896) * windowHeight,width: (17 / 414) * windowWidth, height: (17 / 896) * windowHeight,}} />
      <Image source={require('./../assets/green.png')} style={{left: (12 / 414) * windowWidth, top: (34/ 896) * windowHeight,width: (17 / 414) * windowWidth, height: (17 / 896) * windowHeight,}} />

      <Text style={styles.text1}>Payment Pending</Text>
      <Text style={styles.text2}>Paid and Items not received</Text>
      <Text style={styles.text3}>Items ready</Text>
      </View>

            <Text style={styles.OrderNumber}>Order Number:</Text>
        {orderStatus()}
            
            <TouchableOpacity style={styles.Button2Style}
                onPress={() => { 
                    fire.database().ref('Orders').orderByChild('OrderNo').equalTo(orderNo).on('value',snap=>{
                        snap.forEach(child=>{
                         fire.database().ref('Orders/'+child.key).update({
                             Status:'C'
                         })
                        })
                    })
                    navigation.navigate("ThankyouPage") }} >
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
    
  infoDisplay: {
    position: "absolute",
    width: 369/414 * windowWidth,
    height: 100/896 * windowHeight,
    left: 22/414 * windowWidth,
    top: 92/896 * windowHeight,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 5,
},
    
  blueStyle: {
    position: "absolute",
    right: (27 / 414) * windowWidth,
    top: (6 / 896) * windowHeight,
    lineHeight: 22,
    fontWeight: "bold",
  },

  redStyle: {
    position: "absolute",
    right: (27 / 414) * windowWidth,
    top: (35 / 896) * windowHeight,
    lineHeight: 22,
    fontWeight: "bold",
  },

  greenStyle: {
    position: "absolute",
    right: (27 / 414) * windowWidth,
    top: (64 / 896) * windowHeight,
    lineHeight: 22,
    fontWeight: "bold",
  },
    
  text1: {
    position: "absolute",
    left: (70 / 414) * windowWidth,
    top: (6 / 896) * windowHeight,
    fontWeight: "bold",
    lineHeight: 22,
    fontSize: 18
  },

  text2: {
    position: "absolute",
    left: (70 / 414) * windowWidth,
    top: (35 / 896) * windowHeight,
    fontWeight: "bold",
    lineHeight: 22,
    fontSize: 18
  },

  text3: {
    position: "absolute",
    left: (70 / 414) * windowWidth,
    top: (64 / 896) * windowHeight,
    fontWeight: "bold",
    lineHeight: 22,
    fontSize: 18,
    display: "flex"
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