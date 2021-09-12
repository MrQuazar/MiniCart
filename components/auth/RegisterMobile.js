import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

import logo from '../../assets/TheIcon.png'
import arrow from '../../assets/Arrow.png'

export default function RegisterMobile({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
        colors={['#D49CFF', '#8F00FF', '#0038FF', '#102265']}
        style={styles.background}
      />
      <TouchableOpacity style={styles.Arrow} onPress={() => navigation.navigate("Login")} >
        <Image source={arrow} style={styles.ArrowHead} />
      </TouchableOpacity>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoimg} />
      </View>
      <View style={styles.RectangleShapeView} />
      <Text style={styles.RegText}>Register</Text>
      <Text style={styles.CreateNewAccTxt}>Create a New Account</Text>
      <TextInput style={styles.InputStyle} placeholder='Mobile Number' keyboardType='numeric'></TextInput>
      <TouchableOpacity style={styles.HaveAccTxt}>
        <Text style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "500", fontSize: 10, lineHeight: 12, color: "rgba(231, 231, 231, 0.81)" }}>
          Have an account already?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignUpText} onPress={() => navigation.navigate("Login")}>
        <Text style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "500", fontSize: 10, lineHeight: 12, color: "#FFC700" }}>
          Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} title='Get OTP' onPress={() => navigation.navigate("EnterOTP")}>
        <Text style={styles.ButtonText}>Get OTP</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: windowWidth,
    height: windowHeight,
  },

  Arrow:
  {
    position: "absolute",
    width: 29 / 414 * windowWidth,
    height: 21 / 896 * windowHeight,
    left: 10 / 414 * windowWidth,
    top: 60 / 896 * windowHeight
  },

  ArrowHead:
  {
    resizeMode: "contain",
    width: '100%',
    height: '100%',
  },

  logo:
  {
    width: 208 / 414 * windowWidth,
    height: 208 / 896 * windowHeight,
    left: 103 / 414 * windowWidth,
    top: 59 / 896 * windowHeight,
    position: 'absolute'
  },

  logoimg:
  {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  RectangleShapeView:
  {
    position: "absolute",
    width: 304 / 414 * windowWidth,
    height: 233 / 896 * windowHeight,
    left: 55 / 414 * windowWidth,
    top: 292 / 896 * windowHeight,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  background: {
    position: "relative",
    width: 414 / 414 * windowWidth,
    height: 896 / 896 * windowHeight,
  },

  RegText:
  {
    position: "absolute",
    left: 169 / 414 * windowWidth,
    top: 308 / 896 * windowHeight,
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
    left: 147 / 414 * windowWidth,
    top: 336 / 896 * windowHeight,
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
    width: 224 / 414 * windowWidth,
    height: 40 / 896 * windowHeight,
    left: 95 / 414 * windowWidth,
    top: 385 / 896 * windowHeight,
    paddingLeft: 10,
    backgroundColor: "#e5e5e5"
  },

  HaveAccTxt:
  {
    position: "absolute",
    left: 95 / 414 * windowWidth,
    top: 435 / 896 * windowHeight,

  },

  SignUpText:
  {
    position: "absolute",
    left: 285 / 414 * windowWidth,
    top: 435 / 896 * windowHeight,
  },

  Button:
  {
    position: "absolute",
    width: 224 / 414 * windowWidth,
    height: 37 / 896 * windowHeight,
    left: 95 / 414 * windowWidth,
    top: 456 / 896 * windowHeight,
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
    "fontFamily": "Roboto",
    "fontStyle": "normal",
    "fontWeight": "500",
    "fontSize": 14,
    "lineHeight": 16,
    "display": "flex",
    "alignItems": "center",
    "textAlign": "center",
    "color": "#FFFFFF"
  }


});