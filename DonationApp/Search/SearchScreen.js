import React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Tabs, Tab } from 'native-base';
import colors from '../common/colors.styles';

import OrganizationList from '../common/OrganizationList';

import styles from './SearchScreen.styles';
import * as exampleData from "../data/ExampleData";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    headerTitleStyle :{
      textAlign: 'center',
      alignSelf:'center',
      color: 'white',
    },
    headerStyle:{
        backgroundColor: colors.main.color,
    },
};

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
        return organization.RelevantStrings.toLowerCase().match(search);
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
        <View style={{ marginTop: '5%' }}>
        {
        this.state.search == false ? 
            (<Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
            <Tab heading="RECOMMENDED"
            tabStyle={styles.tabContainerStyle}
            textStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTextStyle={styles.tabTextStyle}>
              
            </Tab>
            <Tab heading="POPULAR"
            tabStyle={styles.tabContainerStyle}
            textStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTextStyle={styles.tabTextStyle}>
                
            </Tab>
            <Tab heading="PROXIMITY"
            tabStyle={styles.tabContainerStyle}
            textStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTextStyle={styles.tabTextStyle}>
                
            </Tab>
    </Tabs>) : 
            (<View>
                <OrganizationList organization = {filteredOrganizations} />
            </View>)}
        </View>
      </View>
    );
  }
}
