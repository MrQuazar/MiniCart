import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView, Alert } from 'react-native';

import qrScan from './../assets/qrScan.png'
import minusbtn from './../assets/minusbtn.png'
import plusbtn from './../assets/plusbtn.png'
import { Dimensions } from 'react-native';

import fire from './firebase';
import 'firebase/database'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const itemsList = [];

export default function Cart({ navigation ,route }) {

  const [QRarray, setQRarray] = React.useState(route.params ? route.params : []);
  const [itemsArray, setItemsArray] = React.useState([]);
  const [flag, setFlag] = React.useState(0);
  const [test,setTest] = React.useState();
  console.log(JSON.stringify(QRarray))
  if(flag===0){
  for (let i = 0; i < QRarray.length; i++) {
    fire.database().ref('Items').orderByChild("ItemId").equalTo(QRarray[i].Code).on('value', snapshot => {

      let data = snapshot.val();
      const items = Object.values(data);
      itemsArray.push(items[0]);
    });
  }
  setFlag(1);
}
  const [totalCost,setTotalCost] = useState(0)
  const totalItems = itemsArray.length;

let sum =0,i=0
  for(let item of itemsArray){
    sum += item.Price * QRarray[i].Quant 
    i++
  }

  if(!itemsArray){return(<Text>The page is loading</Text>)}
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{flex:0.5}}>
      <TouchableOpacity style={styles.qrScanStyle} onPress={() => navigation.navigate("QR Screen")}>
        <Image source={qrScan} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buyBtnStyle} title='BuyButton' onPress={() => navigation.navigate("Order Screen")}>
        <Text style={{color: "white"}}>Proceed to Buy ({totalItems} items)</Text>
      </TouchableOpacity>
      
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.cartTotal}>₹ {sum}</Text>
      <TextInput style={styles.InputStyle1} placeholder='Search here'></TextInput>  
      </View>

      <ScrollView contentContainerStyle= {{justifyContent:'space-around'}} style={{flexGrow: 0.1, "width": 414/414 * windowWidth, "height": 600/896 * windowHeight, "left": -10/414 * windowWidth, "top":120/896 * windowHeight}}>
        {itemsArray.map((item, index) => {
          return (
            <View key={index} style={{flex: 1, "width": 414/414 * windowWidth, Height: 1000/896 * windowHeight,"top": -90/896 * windowHeight, marginVertical:60}}>

              <TouchableOpacity style={styles.prod1Style} >
                <Image source={{uri: item.Image}} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.plusStyle} onPress={() => {
                QRarray[index].Quant = QRarray[index].Quant + 1
                setTest(QRarray[index].Quant)
               /* console.log(item.Quantity)*/}}>
                <Image source={plusbtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.minusStyle} onPress={() => {
                if(QRarray[index].Quant === 1){
                  Alert.alert(
                    "Alert",
                    "Do You Want to Remove This Item",
                    [
                      {
                        text: "NO",
                        onPress: () => console.log("Cancel Pressed"),
                        
                      },
                      { text: "YES", 
                      onPress: () => {                    
                          itemsArray.splice(index, 1)
                          QRarray.splice(index,1)
                          console.log(index)
                          console.log(itemsArray)
                          setTest(index) 
                      }
                    }
                    ],
                    
                  );


                }

                else{
                  QRarray[index].Quant = QRarray[index].Quant - 1
                setTest(QRarray[index].Quant)
                /*console.log(item.Quantity)*/}}}>
                <Image source={minusbtn} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
              </TouchableOpacity>
               
              <Text style={styles.itemName}>{item.Name}</Text>
              <Text style={styles.itemPrice}>₹{item.Price * QRarray[index].Quant}</Text>
              <Text style={styles.itemQuantity}>{QRarray[index].Quant}</Text>
            </View>
          );
        })}
      </ScrollView>
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
  
  itemsList: {
    flex: 1,
    position: "relative",
    flexDirection: 'row',
    "width": 414/414 * windowWidth,
    "height": 0/896 * windowHeight,
    "left": 0/414 * windowWidth,
    "top": -100/896 * windowHeight,
  },
  
  dividerStyle: {
    "position": "absolute",
    "width": 800/414 * windowWidth,
    "height": 1/896 * windowHeight,
    "left": -200/414 * windowWidth,
    "top": 1/896 * windowHeight,
  },

  qrScanStyle: {
    "position": "absolute",
    "width": 0.09 * windowWidth,
    "height": 0.05 * windowHeight,
    "right": 26/414 * windowWidth,
    "top": 50/896 * windowHeight
  },

  prod1Style: {
    "position": "absolute",
    "width": 0.246377 * windowWidth,
    "height": 0.10379 * windowHeight,
    "left": 22/414 * windowWidth,
    "top": 18/896 * windowHeight,
  },

  minusStyle: {
    "position": "absolute",
    "width": 0.08454 * windowWidth,
    "height": 0.04241 * windowHeight,
    "right": 26/414 * windowWidth,
    "top": 84/896 * windowHeight,
  },

  plusStyle: {
    "position": "absolute",
    "width": 0.08454 * windowWidth,
    "height": 0.04241 * windowHeight,
    "right": 122/414 * windowWidth,
    "top": 84/896 * windowHeight,
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
    "height": 58/896 * windowHeight,
    "right": 30/414 * windowWidth,
    "top": 0.21875 * windowHeight,

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 35,
    lineHeight: 40,
    color: "#0137F4",
  },

  itemName: {
    position: "absolute",
    "width": 250/414 * windowWidth,
    "left": 134/414 * windowWidth,
    "top": 24/896 * windowHeight,
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
    "top": 75/896 * windowHeight,
    textAlign: 'center',

    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 28,
    color: "#000000",
  },

  itemQuantity: {
    position: "absolute",
    "right": 84/414 * windowWidth,
    "top": 84/896 * windowHeight,
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
    "left": 15/414 * windowWidth,
    "top": 50/896 * windowHeight,
    paddingLeft: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
});