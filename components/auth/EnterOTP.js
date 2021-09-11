import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import logo from '../../assets/TheIcon.png'
import arrow from '../../assets/Arrow.png'

export default function EnterOTP({ navigation }){
    return(
        <View style={{flex:1, backgroundcolor:'#e5e5e5', justifyContent: 'center'}}>
            <LinearGradient
            start={{x: 1, y: 0}} end={{x: 0, y: 1}}
            colors={['#D49CFF', '#8F00FF' , '#0038FF' , '#102265' ]}
            style={styles.background}
            />
            <TouchableOpacity style={styles.Arrow} onPress={() => navigation.navigate("RegisterMobile")} >
            <Image source={arrow} style={styles.ArrowHead}/>
            </TouchableOpacity>           
            <Image source={logo} style={{width:208,height:208,left:103,top:59,position:'absolute'}}/>
            <View style={styles.RectangleShapeView} />
            <Text style={styles.RegText}>Register</Text>
            <Text style={styles.CreateNewAccTxt}>We’ve sent an OTP on your Mobile Number</Text>
            <TextInput style={styles.InputStyle} placeholder='Enter OTP' keyboardType='numeric'></TextInput>
            <TouchableOpacity  style={styles.HaveAccTxt}>
            <Text style={{fontFamily: "Roboto",fontStyle: "normal",fontWeight: "500",fontSize: 10,lineHeight: 12,color: "rgba(231, 231, 231, 0.81)"}}>
            Didn’t receive OTP?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.SignUpText}>
            <Text style={{fontFamily: "Roboto",fontStyle: "normal",fontWeight: "500",fontSize: 10,lineHeight: 12,color: "#FFC700"}}>
            Resend OTP</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.Button} title='Get OTP' onPress={() => navigation.navigate("FinishRegistration")}>
              <Text style={styles.ButtonText}>Continue</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    Arrow:
    {
      position: "absolute",
      width: 29,
      height: 21,
      left: 10,
      top: 38
    },

    ArrowHead:
    {
      position: "absolute",
      width: 29,
      height: 21,
    },


    RectangleShapeView: 
    {
        position: "absolute",
        width: 304,
        height: 233,
        left: 55,
        top: 292,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
    },

    background: {
        position: "relative",
        width: 414,
        height: 896,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },

    RegText:
    {
        position: "absolute",
        width: 77,
        height: 21,
        left: 169,
        top: 308,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 19,
        color: "#FFC700"
    },

    CreateNewAccTxt:
    {
        position: "absolute",
        width: 240,
        height: 15,
        left: 92,
        top: 336,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 14,
        color: "rgba(231, 231, 231, 0.81)"
      },

    InputStyle:
    {
        position: "absolute",
        width: 224,
        height: 40,
        left: 95,
        top: 385,
        paddingLeft: 10,
        backgroundColor: "#e5e5e5"
      },

    HaveAccTxt:
    {
        position: "absolute",
        width: 119,
        height: 15,
        left: 95,
        top: 435,
        
      },

    SignUpText:
    {
        position: "absolute",
        width: 58,
        height: 9,
        left: 262,
        top: 435,
      },

    Button:
    {
        position: "absolute",
        width: 224,
        height: 37,
        left: 95,
        top: 456,
        backgroundColor: "#FFC700",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },

      ButtonText:
      {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#FFFFFF"
      }
    

  });