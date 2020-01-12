/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import MainPage from './MainPage';
//import Routes from './routes';
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

import * as exampleData from "./ExampleData.json"

const App: () => React$Node = () => {
  return (
    //<Router routes = {routes}/>
    <View>
      <MainPage organizations = {["hello"]}/>
    </View>
    );
};


export default App;
