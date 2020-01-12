import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';

import styles from './OrganizationList.styles';

export default class OrganizationList extends React.Component {
    render() {
        return (
            <FlatList
                data={this.props.organization}
                renderItem={({ item }) => <CreateOrganizationalBlock organization = {item} />}
                keyExtractor={item => item.OrganizationID}
            /> 
        )
    }
}

class CreateOrganizationalBlock extends React.Component
{
  render() {
  return(
    <TouchableOpacity
    onPress={() => Linking.openURL(this.props.organization.Website)}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}> {this.props.organization.OrganizationName} </Text>
        <Text style={styles.sectionDescription}>
        {this.props.organization.MissionStatement} {"\n\n"}
        Relevant Tags : {parseTags(this.props.organization.Tags)}
        </Text>
      </View>
    </TouchableOpacity>
    )}
}

function parseTags(array) {
  return array.replace(/, /g, " ");
}
