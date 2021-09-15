import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import fire from "../firebase";

import RegisterMobileScreen from './Components/Auth/RegisterMobile';
import EnterOTPScreen from './Components/Auth/EnterOTP';
import FinishRegistrationScreen from './Components/Auth/FinishRegistration';
import CartScreen from './Components/cart';

import OrderScreen from './Components/orderScreen';
import LoginScreen from './Components/Auth/Login';
import ThankyouPageScreen from './Components/ThankyouPage';
import QRScreen from './Components/QRScreen';

const [user, setUser] = useState('');
const [Name, setName] = useState('');
const [Password, setPassword] = useState('');
const [NameError, setNameError] = useState('');
const [PasswordError, setPasswordError] = useState('');
const [hasAccount, sethasAccount] = useState(false);

const handleLogin = () => {
  fire
    .auth()
    .signInWithMobileAndPassword(mobile, password)
    .catch(err => {
      switch (err.code) {
        case "auth/invalid-mobilenumber":
        case "auth/user-disabled":
        case "auth/user-notfound":
          setNameError(err.message);
          break;
        case "auth/invalid-password":
          setPasswordError(err.message);
          break;
      }
    })
};

const handleSignUp = () => {
  fire
    .auth()
    .createUserWithMobileAndPassword(mobile, password)
    .catch(err => {
      switch (err.code) {
        case "auth/mobilenumber-already-in-use":
        case "auth/invalid-mobilenumber":
          setMobileError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })
};

const handleLogOut = () => {
  fire.auth().signOut();
};

const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser("")
    }
  });
};
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
