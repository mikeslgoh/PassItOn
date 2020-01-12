import React from 'react';
import { View, Text } from 'react-native';

export default class OrganizationList extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}
