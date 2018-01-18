import React from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

class FirstScreen extends React.Component {
    constructor(props){
        super(props);
        console.log('first screen',this.props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'First',
    });
    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.wrapper}>
               <Card title="ingredient">
               <View>
                   <Text>Card 1</Text>
                   
                   </View>
               </Card>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default FirstScreen;