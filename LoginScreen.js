import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';


const loginBannerImage = "https://png.pngtree.com/thumb_back/fw800/back_pic/04/43/02/19585258812aef2.jpg";
import { SocialIcon, Button } from 'react-native-elements';
const resizeMode = 'center';
export default class LoginScreen extends React.Component {
    static navigationOptions= ({navigation}) =>({
        title: 'Login',	
  });  

    constructor(props){
        super(props);
     console.log('Navigation',this.props.navigation)
    }

    
    render() {
    
        return (
            <ImageBackground
                style={{
                    backgroundColor: '#ccc',
                    flex: 1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
                source={{ uri: loginBannerImage }}
            >
                <View style={styles.MainContainer}>
                    <View style={styles.buttonSpace}>
                        <Button
                            backgroundColor="#8E518D"
                            style={styles.buttonSpace}
                            icon={{ name: 'google', type: 'font-awesome' }}
                            borderRadius={20}
                            title='Sign In With Google'></Button></View>
                    <View style={styles.buttonSpace}>
                        <Button
                            backgroundColor="#8E518D"
                            icon={{ name: 'facebook', type: 'font-awesome' }}
                            style={styles.buttonSpace}
                            borderRadius={20}
                            onPress={()=>navigate('Splash')}
                            title='Sign In With Facebook'></Button></View>
                    <View style={styles.termsSpace}>
                        <Text style={styles.termsContent}>By Signing in,I agree to Wa2cook's Terms of Service and Privacy Policy</Text>
                    </View>
                </View>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    SigninButton: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonSpace: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 20,
    },
    termsSpace: {

        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },
    termsContent: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14
    }
});
