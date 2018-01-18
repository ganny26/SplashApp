import React from 'react';
import { Image, Platform, StyleSheet, Text, View ,StatusBar,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Constants, ScreenOrientation } from 'expo';


class MainScreen extends React.Component {
    render(){
        return(
            <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
            <SafeAreaView
            style={styles.bannerContainer}
            forceInset={{ top: 'always' }}
          >
            <View style={styles.banner}>
              <Image source={require('../images/NavLogo.png')} style={styles.image} />
              <Text style={styles.title}>React Navigation Examples</Text>
            </View>
          </SafeAreaView>
          </ScrollView>
          <StatusBar barStyle="light-content" />
        <View style={styles.statusBarUnderlay} />
          </View>
        )
    }
}
export default MainScreen;
const styles = StyleSheet.create({
    bannerContainer: {
      backgroundColor: '#673ab7',
      paddingTop: 20,
    },
    banner: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    image: {
      width: 36,
      height: 36,
      resizeMode: 'contain',
      tintColor: '#fff',
      margin: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: '200',
      color: '#fff',
      margin: 8,
    },
    statusBarUnderlay: {
        backgroundColor: '#673ab7',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Constants.statusBarHeight,
      }
  });
  