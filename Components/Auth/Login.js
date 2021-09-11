import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import logo from '../../assets/TheIcon.png'

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundcolor: '#e5e5e5', justifyContent: 'center' }}>
      <LinearGradient
        start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
        colors={['#D49CFF', '#8F00FF', '#0038FF', '#102265']}
        style={styles.background}
      />

      <Image source={logo} style={{ width: 208, height: 208, left: 103, top: 59, position: 'absolute' }} />
      <View style={styles.RectangleShapeView} />
      <Text style={styles.LoginText}>Login</Text>
      <Text style={styles.CreateNewAccTxt}>Enter your Username and Password</Text>
      <TextInput style={styles.InputStyle1} placeholder='Enter Username'></TextInput>
      <TextInput style={styles.InputStyle2} placeholder='Enter Password' secureTextEntry={true}></TextInput>
      <Text style={styles.regText} onPress={() => navigation.navigate("RegisterMobile")}>Create One</Text>
      <Text style={styles.regNowText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.Button} title='Login' onPress={() => navigation.navigate("Order Screen")}>
        <Text style={styles.ButtonText}>Login</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

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
    height: 287,
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

  LoginText:
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

  regText:
    {
        position: "absolute",
        width: 53,
        height: 9,
        left: 267,
        top: 489,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 11,
        color: "#FFC700"
    },

  CreateNewAccTxt:
  {
    position: "absolute",
    width: 200,
    height: 15,
    left: 116,
    top: 336,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "rgba(231, 231, 231, 0.81)"
  },

  regNowText:
    {
        position: "absolute",
        width: 114,
        height: 11,
        left: 95,
        top: 489,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 12,
        color: "rgba(231, 231, 231, 0.81)"
      },

  InputStyle1:
  {
    position: "absolute",
    width: 224,
    height: 40,
    left: 95,
    top: 385,
    paddingLeft: 10,
    backgroundColor: "#e5e5e5"
  },

  InputStyle2:
  {
    position: "absolute",
    width: 224,
    height: 40,
    left: 95,
    top: 439,
    paddingLeft: 10,
    backgroundColor: "#e5e5e5"
  },

  Button:
  {
    position: "absolute",
    width: 224,
    height: 37,
    left: 95,
    top: 510,
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