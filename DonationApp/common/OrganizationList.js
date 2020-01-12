import React from 'react';
import { View, Text, FlatList } from 'react-native';

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
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}> {this.props.organization.OrganizationName} </Text>
      <Text style={styles.sectionDescription}>
      Mission Statement : {this.props.organization.MissionStatement} {"\n"}
      Relevant Tags : {parseTags(this.props.organization.Tags)}
      </Text>
    </View>
    )}
}

function parseTags(array) {
  ReturnedString = ""
  Space = " "
  for (let i = 0; i < array.length; i++)
  {
    ReturnedString+= array[i]
    ReturnedString+= Space
  }
  return ReturnedString
}
