import React from 'react';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
const Navigator = StackNavigator({
    Login: {
      screen: LoginScreen,
    },
    Splash: {
      screen: SplashScreen,
    },
  });
  
  export default Navigator;