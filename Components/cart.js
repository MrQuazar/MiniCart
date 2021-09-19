import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import qrScan from './../assets/qrScan.png'
import prod1 from './../assets/prod1.png'
import minusbtn from './../assets/minusbtn.png'
import plusbtn from './../assets/plusbtn.png'
import divider from './../assets/divider.png'
import { Dimensions } from 'react-native';

import fire from './firebase';
import 'firebase/database'
import { render } from 'react-dom';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cart({ route, navigation }) {

  const [state, setState] = useState({ productNo: 2, prodPrice: 100, prodName: 'Faber Castell Assorted 20 ml, Pack of 6 colors', totalCost: 200 })
  const [QRarray, setQRarray] = React.useState(route.params ? route.params : []);
  const [newItemsArray, setNewItemsArray] = useState([]);
  for (let i = 0; i < QRarray.length; i++) {
    fire.database().ref('Items').orderByChild("ItemId").equalTo(QRarray[i]).on('value', snapshot => {

      let data = snapshot.val();
      const items = Object.values(data);
      newItemsArray.push(items[0]);
    });
  }

  console.log(QRarray)
  console.log(newItemsArray)
  const totalItems = newItemsArray.length;

  if (!newItemsArray) { return (<Text>The page is loading</Text>) }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
      <View style={styles.itemsList}>
        {newItemsArray.map((item, index) => {
          return (
            <View key={index} style={{ maxHeight: 100 / 896 * windowHeight }}>
              <TouchableOpacity style={styles.prod1Style} >
                <Image source={{ uri: item.Image }} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.plusStyle}>
                <Image source={plusbtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.minusStyle}>
                <Image source={minusbtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </TouchableOpacity>

              <Text style={styles.itemName}>{item.Name}</Text>
              <Text style={styles.itemPrice}>₹{item.Price}</Text>
              <Text style={styles.itemQuantity}>{state.productNo}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={styles.qrScanStyle} onPress={() => navigation.navigate("QR Screen")}>
        <Image source={qrScan} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyBtnStyle} title='BuyButton' onPress={() => navigation.navigate("Order Screen")}>
        <Text style={{ color: "white" }}>Proceed to Buy ({totalItems} items)</Text>
      </TouchableOpacity>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.cartTotal}>₹ {state.totalCost}</Text>
      <TextInput style={styles.InputStyle1} placeholder='Search here'></TextInput>


    </View>
  )
}
/*
            
*/
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

  itemsList: {
    flex: 0.6,
    position: "relative",
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    "width": 414 / 414 * windowWidth,
    "height": 0 / 896 * windowHeight,
    "left": 0 / 414 * windowWidth,
    "top": -100 / 896 * windowHeight,
  },

  dividerStyle: {
    "position": "absolute",
    "width": 800 / 414 * windowWidth,
    "height": 1 / 896 * windowHeight,
    "left": -200 / 414 * windowWidth,
    "top": 1 / 896 * windowHeight,
  },

  qrScanStyle: {
    "position": "absolute",
    "width": 0.09 * windowWidth,
    "height": 0.05 * windowHeight,
    "right": 26 / 414 * windowWidth,
    "top": 50 / 896 * windowHeight
  },

  prod1Style: {
    "position": "absolute",
    "width": 0.246377 * windowWidth,
    "height": 0.10379 * windowHeight,
    "left": 22 / 414 * windowWidth,
    "top": 18 / 896 * windowHeight,
  },

  minusStyle: {
    "position": "absolute",
    "width": 0.08454 * windowWidth,
    "height": 0.04241 * windowHeight,
    "right": 26 / 414 * windowWidth,
    "top": 84 / 896 * windowHeight,
  },

  plusStyle: {
    "position": "absolute",
    "width": 0.08454 * windowWidth,
    "height": 0.04241 * windowHeight,
    "right": 122 / 414 * windowWidth,
    "top": 84 / 896 * windowHeight,
  },

  buyBtnStyle: {
    "position": "absolute",
    "width": 0.8913 * windowWidth,
    "height": 0.0669 * windowHeight,
    "left": 0.0531 * windowWidth,
    "top": 0.12 * windowHeight,
    backgroundColor: "#0137F4",
    "color": "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  totalText:
  {
    position: "absolute",
    "width": 93 / 414 * windowWidth,
    "height": 38 / 896 * windowHeight,
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
    "height": 58 / 896 * windowHeight,
    "right": 30 / 414 * windowWidth,
    "top": 0.21875 * windowHeight,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 35,
    lineHeight: 40,
    color: "#0137F4",
  },

  itemName: {
    position: "absolute",
    "width": 240 / 414 * windowWidth,
    "height": 38 / 896 * windowHeight,
    "left": 134 / 414 * windowWidth,
    "top": 18 / 896 * windowHeight,
    textAlign: 'left',


    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 19,
    color: "#000000",
  },

  itemPrice: {
    position: "absolute",
    "left": 0.32 * windowWidth,
    "top": 73 / 896 * windowHeight,
    textAlign: 'center',

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 28,
    color: "#000000",
  },

  itemQuantity: {
    position: "absolute",
    "width": 15 / 414 * windowWidth,
    "height": 38 / 896 * windowHeight,
    "right": 84 / 414 * windowWidth,
    "top": 84 / 896 * windowHeight,
    textAlign: 'center',


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
    "left": 15 / 414 * windowWidth,
    "top": 50 / 896 * windowHeight,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
});