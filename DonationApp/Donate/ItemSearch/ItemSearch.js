import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import colors from '../../common/colors.styles';

import OrganizationList from '../../common/OrganizationList';

import styles from './ItemSearch.styles';
import * as exampleData from "../../data/ExampleData";

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
        selectedTags: []
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
        {
            this.state.selectedTags && this.state.selectedTags.map((tag) => {
              return (
                <View style={styles.roundButton}>
                <Text style={styles.buttonTextStyle}>
                    {tag}
                    </Text>
                </View>
              );
            })}
        <SearchBar
            onChangeText={this.updateSearch}
            value={search}
            platform = "android"
            containerStyle={styles.searchBarContainer}
        />
          {
            filteredTags.map((tag) => {
              return (
                <View>
              <TouchableOpacity
              style={styles.roundButton}
              onPress={() => {
                let selected;
                if (this.state.selectedTags === []) {
                  selected = [tag]
                } else {
                  selected = this.state.selectedTags.push(tag);
                }
                this.setState({selectedTags: selected})
                console.log(this.state.selectedTags);
              }}
              >
                <Text style={styles.buttonTextStyle}>
                    {tag}
                  </Text>
                </TouchableOpacity>
                  </View>
              );
            })}
        </View>
    );
  }
}
