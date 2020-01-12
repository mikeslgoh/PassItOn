import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import OrganizationList from '../../common/OrganizationList';

import styles from '../Donate.styles';
import * as exampleData from "../../data/ExampleData";

export default class ItemSearch extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search =>{
        this.setState({search});
    };

  render() {
    // haven't tested the filter function
    const { search } = this.state;
    let filteredOrganizations = exampleData.Organizations.filter(
      (organization) => {
        return organization.RelevantStrings.includes(search);
      }
    );
    return (
      <View>
        <SearchBar
            onChangeText={this.updateSearch}
            value={search}
            platform = "android"
            containerStyle={styles.searchBarContainer}
        />
        <View>
                <OrganizationList organization = {filteredOrganizations} />
            </View>
      </View>
    );
  }
}
