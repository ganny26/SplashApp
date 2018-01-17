import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default class SplashScreen extends React.Component {

 
  render() {
    return (
      <View style={styles.wrapper}>
            <Text style={styles.title}>Splash App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#A5CC6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      color:'white',
      fontSize:35,
      fontWeight:'bold'
  }
});
