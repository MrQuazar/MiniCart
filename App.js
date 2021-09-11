import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterMobileScreen from './components/auth/RegisterMobile';
import EnterOTPScreen from './components/auth/EnterOTP';
import FinishRegistrationScreen from './components/auth/FinishRegistration';

import OrderScreen from './Components/orderScreen';
import LoginScreen from './Components/Auth/Login';

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Order Screen' component={OrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterMobile' component={RegisterMobileScreen} options={{headerShown: false}}/>
        <Stack.Screen name='EnterOTP' component={EnterOTPScreen} options={{headerShown: false}}/>
        <Stack.Screen name='FinishRegistration' component={FinishRegistrationScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  }
