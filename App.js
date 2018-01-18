import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import DayItem from './components/DayItem';

import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import MainScreen from './components/MainScreen';
import { StackNavigator } from 'react-navigation';


const AppNavigator = StackNavigator(

  {
    First: {
      name: 'First Screen',
      description: 'First Screen',
      screen: FirstScreen,
    },
    Second: {
      name: 'Second Screen',
      description: 'Second Screen',
      screen: SecondScreen,
    },

    LoginScreen: {
      name: 'Login',
      description: 'Login',
      screen: LoginScreen,
    }
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none'
  }
);


export default AppNavigator;

