import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterMobileScreen from './Components/Auth/RegisterMobile';
import EnterOTPScreen from './Components/Auth/EnterOTP';
import FinishRegistrationScreen from './Components/Auth/FinishRegistration';

const Stack = createStackNavigator();
export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegisterMobile'>
        <Stack.Screen name='RegisterMobile' component={RegisterMobileScreen} options={{headerShown: false}}/>
        <Stack.Screen name='EnterOTP' component={EnterOTPScreen} options={{headerShown: false}}/>
        <Stack.Screen name='FinishRegistration' component={FinishRegistrationScreen} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});