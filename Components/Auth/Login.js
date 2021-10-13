import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native';
import fire from '../firebase';
import 'firebase/auth'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;


import logo from '../../assets/TheIcon.png'
import react from 'react';

export default function Login({ navigation ,route}) {
  const [UName, setUName] = React.useState();
  const [PWord, setPWord] =  React.useState(route.params ? route.params : null);
  const unamekeeper = React.createRef();
  const passwordkeeper = React.createRef();
  return (
    <View style={{ flex: 1, backgroundcolor: '#e5e5e5', justifyContent: 'center' }}>
      <LinearGradient
        start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
        colors={['#D49CFF', '#8F00FF', '#0038FF', '#102265']}
        style={styles.background}
      />
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoimg} />
      </View>
      <View style={styles.RectangleShapeView} />
      <Text style={styles.RegText}>Login</Text>
      <Text style={styles.CreateNewAccTxt}>Enter your Username and Password</Text>
      <TextInput style={styles.InputStyle1} placeholder='Enter Username'
      onChangeText={UName => setUName(UName)} ref={unamekeeper}
      ></TextInput>
      <TextInput style={styles.InputStyle2} placeholder='Enter Password'
      onChangeText={PWord => setPWord(PWord)} secureTextEntry={true} ref={passwordkeeper}
      ></TextInput>
      <TouchableOpacity style={styles.Button} title='Login' onPress={
        async () => {
          try {
            await fire.auth().signInWithEmailAndPassword(UName+"@gmail.com", PWord);
            unamekeeper.current.clear();
            passwordkeeper.current.clear();
            navigation.navigate("QR Screen")  
          } catch (error) {
            alert('Something Went Wrong');
          }
        }} >
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.HaveAccTxt}>
        <Text style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "500", fontSize: 10, lineHeight: 12, color: "rgba(231, 231, 231, 0.81)" }}>
          Don’t have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUpText}>
        <Text style={{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "500", fontSize: 10, lineHeight: 12, color: "#FFC700" }}
          onPress={() => navigation.navigate("RegisterMobile")}>
          Create One</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },

  RectangleShapeView:
  {
    position: "absolute",
    width: 304 / 414 * windowWidth,
    height: 287 / 896 * windowHeight,
    left: 55 / 414 * windowWidth,
    top: 292 / 896 * windowHeight,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25
  },

  HaveAccTxt:
  {
    position: "absolute",
    left: 95 / 414 * windowWidth,
    top: 489 / 896 * windowHeight,

  },

  SignUpText:
  {
    position: "absolute",
    left: 267 / 414 * windowWidth,
    top: 489 / 896 * windowHeight,
  },

  background: {
    position: "relative",
    width: 414 / 414 * windowWidth,
    height: 896 / 896 * windowHeight,
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


  RegText:
  {
    position: "absolute",
    left: 180 / 414 * windowWidth,
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
    left: 114 / 414 * windowWidth,
    top: 336 / 896 * windowHeight,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "rgba(231, 231, 231, 0.81)"
  },

  InputStyle1:
  {
    position: "absolute",
    width: 224 / 414 * windowWidth,
    height: 40 / 896 * windowHeight,
    left: 95 / 414 * windowWidth,
    top: 385 / 896 * windowHeight,
    paddingLeft: 10,
    backgroundColor: "#e5e5e5"
  },

  InputStyle2:
  {
    position: "absolute",
    width: 224 / 414 * windowWidth,
    height: 40 / 896 * windowHeight,
    left: 95 / 414 * windowWidth,
    top: 439 / 896 * windowHeight,
    paddingLeft: 10,
    backgroundColor: "#e5e5e5"
  },

  Button:
  {
    position: "absolute",
    width: 224 / 414 * windowWidth,
    height: 37 / 896 * windowHeight,
    left: 95 / 414 * windowWidth,
    top: 510 / 896 * windowHeight,
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