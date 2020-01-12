/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainPage from './MainPage';
//import Routes from './routes';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as exampleData from "./ExampleData.json"

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <FlatList
              data={exampleData.Organizations}
              renderItem={({ item }) => <CreateOrganizationalBlock organization = {item} />}
              keyExtractor={item => item.OrganizationID}
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



class CreateOrganizationalBlock extends Component
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
