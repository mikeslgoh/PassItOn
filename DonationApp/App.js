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

import HomeScreen from './Home/HomeScreen';
import DonateScreen from './Donate/DonateScreen';
import ProfileScreen from './Profile/ProfileScreen';
import SearchScreen from './Search/SearchScreen';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,  
      navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
              </View>),  
      }  
    },
    Donate: {
      screen: DonateScreen,  
      navigationOptions:{  
          tabBarLabel:'Donate',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'heart'}/>  
              </View>),  
      }  
    },
    Search: {
      screen: SearchScreen,  
      navigationOptions:{  
          tabBarLabel:'Search',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'search'}/>  
              </View>),  
      }  
    },
    Profile: {
      screen: ProfileScreen,  
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
