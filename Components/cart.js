import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import qrScan from './../assets/qrScan.png'
import prod1 from './../assets/prod1.png'
import buybtn from './../assets/buybtn.png'
import addbtn from './../assets/addbtn.png'
import minusbtn from './../assets/minusbtn.png'
import { Dimensions } from 'react-native';

import fire from './firebase';
import 'firebase/database'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Items = [];

console.log(Items)

const itemsList = [];

for (let i = 0; i < Items.length; i++) {
  itemsList.push(
    <Image source={{ uri: Items[i].Image }} />,
    console.log(Items[i].Image)
  )
}
export default function Cart({ navigation }, { Items }) {

  const [state, setState] = useState({ productNo: 2, prodPrice: 100, prodName: 'Faber Castell Assorted 20 ml, Pack of 6 colors', totalCost: 200 })
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    fire.database().ref('Items').once('value', (data) => {
      const obj = data.toJSON()
      for (let i in obj) {
        Items.push(obj[i])
      }
    })
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
      <View>
        {Items.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.Name}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.qrScanStyle} onPress={() => navigation.navigate("QR Screen")}>
        <Image source={qrScan} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.prod1Style} >
        <Image source={prod1} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyBtnStyle} onPress={() => navigation.navigate("Order Screen")}>
        <Image source={buybtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addStyle}>
        <Image source={addbtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.minusStyle}>
        <Image source={minusbtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      <TextInput style={styles.InputStyle1} placeholder='Search here'></TextInput>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.cartTotal}>₹{state.totalCost}</Text>
      <Text style={styles.itemName}>{state.prodName}</Text>
      <Text style={styles.itemPrice}>₹{state.prodPrice}</Text>
      <Text style={styles.itemQuantity}>{state.productNo}</Text>
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

  background: {
    position: "relative",
    width: 414,
    height: 896,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    "width": windowWidth,
    "height": windowHeight
  },

  qrScanStyle: {
    "position": "absolute",
    "width": 0.09 * windowWidth,
    "height": 0.05 * windowHeight,
    "left": 0.8599 * windowWidth,
    "top": 0.06 * windowHeight
  },

  prod1Style: {
    "position": "absolute",
    "width": 0.246377 * windowWidth,
    "height": 0.10379 * windowHeight,
    "left": 0.05314 * windowWidth,
    "top": 0.31808 * windowHeight
  },

  minusStyle: {
    "position": "absolute",
    "width": 0.08454 * windowWidth,
    "height": 0.04241 * windowHeight,
    "left": 0.75 * windowWidth,
    "top": 0.39 * windowHeight
  },

  addStyle: {
    "position": "absolute",
    "width": 0.08454 * windowWidth,
    "height": 0.04241 * windowHeight,
    "left": 0.5 * windowWidth,
    "top": 0.39 * windowHeight
  },

  buyBtnStyle: {
    "position": "absolute",
    "width": 0.8913 * windowWidth,
    "height": 0.0669 * windowHeight,
    "left": 0.0531 * windowWidth,
    "top": 0.12 * windowHeight
  },

  totalText:
  {
    position: "absolute",
    "left": 0.0531 * windowWidth,
    "top": 0.21875 * windowHeight,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: 37,
    color: "#000000"
  },

  cartTotal: {
    position: "absolute",
    "left": 0.7 * windowWidth,
    "top": 0.21875 * windowHeight,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 35,
    lineHeight: 40,
    color: "#0137F4",
  },

  itemName: {
    position: "absolute",
    width: 240,
    height: 38,
    "left": 0.32367 * windowWidth,
    "top": 0.31808 * windowHeight,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 19,
    color: "#000000",
  },

  itemPrice: {
    position: "absolute",
    "left": 0.32 * windowWidth,
    "top": 0.379 * windowHeight,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 28,
    color: "#000000",
  },

  itemQuantity: {
    position: "absolute",
    "left": 0.64 * windowWidth,
    "top": 0.39 * windowHeight,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: 37,
    color: "#000000",
  },

  InputStyle1:
  {
    position: "absolute",
    "width": 0.7101449275362319 * windowWidth,
    "height": 0.0357142857142857 * windowHeight,
    left: 22,
    top: 46,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
});