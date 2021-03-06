import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height


export default function ThankyouPage({ navigation }) {
    const [resetter, setResetter] = React.useState([]);
    return (
        <TouchableWithoutFeedback onPress={() => navigation.reset({routes:[{name:"QR Screen"}]})}>
            <View style={styles.container} >
                <LinearGradient
                    start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={['#D49CFF', '#8F00FF', '#0038FF', '#102265']}
                    style={styles.background} />
                <View style={styles.smilingcart}>
                    <Image source={require('../assets/smilecart.png')}
                        style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                </View>
                <View style={styles.thankyou}>
                    <Image source={require('../assets/ThankYou.png')}
                        style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: windowWidth,
        height: windowHeight

    },

    background: {
        position: "relative",
        width: windowWidth,
        height: windowHeight,
    },

    smilingcart: {
        position: "absolute",
        width: 0.852 * windowWidth,
        height: 0.228 * windowHeight,
        top: 0.224 * windowHeight,
    },

    thankyou: {
        position: "absolute",
        width: 0.772 * windowWidth,
        height: 0.112 * windowHeight,
        left: 0.113 * windowWidth,
        top: 0.558 * windowHeight
    }

});