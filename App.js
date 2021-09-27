import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import RegisterMobileScreen from './Components/Auth/RegisterMobile';
import EnterOTPScreen from './Components/Auth/EnterOTP';
import FinishRegistrationScreen from './Components/Auth/FinishRegistration';
import CartScreen from './Components/cart';

import OrderScreen from './Components/orderScreen';
import LoginScreen from './Components/Auth/Login';
import ThankyouPageScreen from './Components/ThankyouPage';
import QRScreen from './Components/QRScreen';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Order Screen' component={OrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterMobile' component={RegisterMobileScreen} options={{ headerShown: false }} />
        <Stack.Screen name='EnterOTP' component={EnterOTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name='FinishRegistration' component={FinishRegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ThankyouPage' component={ThankyouPageScreen} options={{ headerShown: false }} />
        <Stack.Screen name='QR Screen' component={QRScreen} options={{ headerShown: false }} />
        <Stack.Screen name='cart' component={CartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
