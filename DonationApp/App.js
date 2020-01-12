/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Home/HomeScreen';
import LoginScreen from './login/LoginScreen';

import DonateScreen from './Donate/DonateScreen';
import ItemSearch from './Donate/ItemSearch/ItemSearch';

import ProfileScreen from './Profile/ProfileScreen';
import SearchScreen from './Search/SearchScreen';


// Need to figure out how to use stack navigator in order to move back
// and forth between screens without the bottom navigation
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
    alignSelf: 'center'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    flexGrow:1,
    alignSelf:'center',
  },
};

const HomeStack = createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerLeft: null
      }
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions
  });

  HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index < 1) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

const DonationStack = createStackNavigator(
  {
    Donate: { screen: DonateScreen },
    ItemSearch: { screen: ItemSearch }
  })

const SearchStack = createStackNavigator(
  {
    Search: { screen: SearchScreen },
  })

  const ProfileStack = createStackNavigator(
    {
      Profile: { screen: ProfileScreen },
    })

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,  
      navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
              </View>),  
      }  
    },
    Donate: {
      screen: DonationStack,  
      navigationOptions:{  
          tabBarLabel:'Donate',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'heart'}/>  
              </View>),  
      }  
    },
    Search: {
      screen: SearchStack,  
      navigationOptions:{  
          tabBarLabel:'Search',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'search'}/>  
              </View>),  
      }  
    },
    Profile: {
      screen: ProfileStack,  
      navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'user-circle'}/>  
              </View>),  
      }  
    }
  }
);

const App = createAppContainer(TabNavigator);

export default App;
