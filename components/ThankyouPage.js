import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ThankyouPage({navigation}) {


    return(
        <View>
            <LinearGradient
            start={{x: 1, y: 0}} end={{x: 0, y: 1}}
            colors={['#D49CFF', '#8F00FF' , '#0038FF' , '#102265' ]}
            style={styles.background} />

            <Image source={require('../assets/smilecart.png')} 
                   style = {styles.smilingcart}  />
            
            <Image source={require('../assets/ThankYou.png')}
                   style = {styles.thankyou} />

        </View>


    );

}

const styles = StyleSheet.create({
    background: {
        position: "relative",
        width: 414,
        height: 896,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },

    smilingcart: {
        position: "absolute",
        width: 335,
        height: 195,
        top: 215
    },

    thankyou: {
        position: "absolute",
        width: 320,
        height: 95,
        left: 30,
        top: 500
      }
    
});