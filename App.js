import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';


export default class App extends React.Component {


  onPressLearnMore() {
    console.log("Learn More");
    Alert.alert('Learn more', 'Visit https://www.splashapp.co to learn more information'), [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      { cancelable: false }
  }
  render() {
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
