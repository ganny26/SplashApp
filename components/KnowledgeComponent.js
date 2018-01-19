import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Card, ListItem, Button, SearchBar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
class KnowledgeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View >
                    <View style={{ flexDirection: 'column' }}>
                        <Progress.Bar
                            style={styles.progress}
                            progress={this.props.fieldLevel} width={280}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                            <Text style={{ textAlign: 'right' }}>{this.props.fieldText}</Text>
                            <Text style={{ textAlign: 'left' }}>{this.props.fieldValue}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Right</Text>
                </View>
            </View>


        )
    }

}
const styles = StyleSheet.create({
    SearhbarStyle: {
        marginTop: 10
    },
    wrapper: {
        flex: 1
    },
    progress: {
        margin: 10,
    }
})

export default KnowledgeComponent;