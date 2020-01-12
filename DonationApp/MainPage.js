import React from 'react';
import { SearchBar } from 'react-native-elements';
import * as exampleData from "./ExampleData.json"


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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



export default class MainPage extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search =>{
    this.setState({search});
  };

  render() {
    const { search } = this.state;
    let filteredOrganizations = exampleData.Organizations.filter(
      (organization) => {
        return organization.RelevantStrings.includes(search);
      }
    );
    return (
      <>
      <StatusBar barStyle="dark-content" />
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
              <View style={styles.sectionContainer}>
                <SearchBar
                  placeholder="Type Here..."
                  onChangeText={this.updateSearch}
                  value={search}
                  platform = "android"
                />
              </View>
              <View>
                <NodeDisplayer organizations = {filteredOrganizations}/>
              </View>
            </View>
          </ScrollView>
      </>
    );
  }
}


class NodeDisplayer extends React.Component{
  render(){
    return(
      <View style = {styles.sectionTitle}>
        <Text sectionTitle> I am a test node if you see me it
        means the thing you are doing is working!
         </Text>
      </View>
    )
  }
}

// Nodes for each OrganizationNode
// Will eventually have the fields appropriate to each organization JSON object
class OrganizationNode extends React.Component{
  render(){
    return(
      <View style = {styles.sectionTitle}>
        <Text sectionTitle> Testing Testing </Text>
      </View>
    )
  }
}



class DummyTestNode extends React.Component{
  render(){
    return(
      <View style = {styles.sectionTitle}>
        <Text sectionTitle> I am a test node if you see me it
        means the thing you are doing is working!
         </Text>
      </View>
    )
  }
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
    fontSize: 50,
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
