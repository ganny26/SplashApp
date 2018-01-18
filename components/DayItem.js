import React from 'react';
import { StyleSheet, Text } from 'react-native';


class DayItem  extends React.Component{
    constructor(props){
        super(props);
        console.log('props of dayitem',this.props)
        this.state = {
            'day_list':''
        }
    }

    componentWillMount(){
        this.setState({
            'day_list':this.props.dayList
        })
    }
    render() {
        return (
            <Text style={styles.dayStyle}>
               {this.props.dayList}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    dayStyle: {
        fontSize: 18,
        color: 'purple'
    }
})
export default DayItem;