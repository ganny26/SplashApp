import React from 'react';
import {Text, View,Button} from 'react-native';


class FirstScreen extends React.Component{
        render(){
            const {navigate} = this.props.navigation;
            return(
                <View>
                    <Text>This is first screen</Text>
                    <Button title="Press Me" onPress={()=>navigate("Second",{'name':'Hello'})}>
                    </Button>
                </View>
            )
        }
}

export default FirstScreen;