import React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Card, ListItem, Button, SearchBar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import KnowledgeComponent from './KnowledgeComponent';
class FirstScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log('first screen', this.props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'First',
    });
    render() {

        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{
                flex: 1, alignSelf: 'stretch'
            }}>
                <View>
                    <View style={styles.SearhbarStyle}>
                        <SearchBar
                            lightTheme
                            round
                            placeholder='Search Recipes' />
                    </View>
                    <View>
                        <Card title="Recipe 1">
                            <KnowledgeComponent fieldLevel={0.3} fieldText="Carbs" fieldValue="32g | 23%" />
                            <KnowledgeComponent fieldLevel={0.5} fieldText="Protein" fieldValue="22g | 50%" />
                            <KnowledgeComponent fieldLevel={0.8} fieldText="Fat" fieldValue="188g | 80%" />
                        </Card>
                        <Card title="Recipe 2">
                            <KnowledgeComponent fieldLevel={0.3} fieldText="Carbs" fieldValue="32g | 23%" />
                            <KnowledgeComponent fieldLevel={0.5} fieldText="Protein" fieldValue="22g | 50%" />
                            <KnowledgeComponent fieldLevel={0.8} fieldText="Fat" fieldValue="188g | 80%" />
                        </Card>
                        <Card title="Recipe 3">
                            <KnowledgeComponent fieldLevel={0.3} fieldText="Carbs" fieldValue="32g | 23%" />
                            <KnowledgeComponent fieldLevel={0.5} fieldText="Protein" fieldValue="22g | 50%" />
                            <KnowledgeComponent fieldLevel={0.8} fieldText="Fat" fieldValue="188g | 80%" />
                        </Card>
                    </View>
                </View>
            </ScrollView>

        )
    }
}


const styles = StyleSheet.create({
    SearhbarStyle: {
        marginTop: 30
    },
    wrapper: {
        flex: 1
    },
    progress: {
        margin: 10,
    }
})

export default FirstScreen;