import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Tabs, Tab } from 'native-base';
import colors from '../../common/colors.styles';

import OrganizationList from '../../common/OrganizationList';

import styles from './ItemSearch.styles';
import * as exampleData from "../../data/ExampleData";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class ItemSearch extends React.Component {
  static navigationOptions = {
    title: 'Donate',
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

    tagString = "Clothing, Food, Monetary, Toys, Cutlery, Books"

    updateSearch = search =>{
        this.setState({search});
    };

  render() {
    let tags = this.tagString.split(", ");
    // haven't tested the filter function
    const { search } = this.state;
    let filteredTags = tags.filter(
      (tag) => {
        return tag.toLowerCase().match(search);
      }
    );
    return (
      <View>
        <Text style={styles.textStyle}>What kind of items {"\n"} are you donating?</Text>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.3,
                marginBottom: '5%',
            }}
        />
        <SearchBar
            onChangeText={this.updateSearch}
            value={search}
            platform = "android"
            containerStyle={styles.searchBarContainer}
        />
        <View>
          {
            filteredTags.map((tag) => {
              return (
                <View>
              <TouchableOpacity
              style={styles.roundButton}
              onPress={() => {}}
              >
                <Text style={styles.buttonTextStyle}>
                    {tag}
                  </Text>
                </TouchableOpacity>
                  </View>
              );
            })}
        </View>
        </View>
    );
  }
}
