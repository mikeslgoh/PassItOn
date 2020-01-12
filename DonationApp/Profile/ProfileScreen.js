import React from 'react';
import { View, Text,Image } from 'react-native';
import { Tabs, Tab } from 'native-base';

import colors from '../common/colors.styles';
import styles from './ProfileScreen.styles';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerTitleStyle :{
      textAlign: 'center',
      alignSelf:'center',
      color: 'white'
    },
    headerStyle:{
        backgroundColor: colors.main.color,
    },
};

  render() {
    return (
      <View style={styles.profileStyle}>
            <CreateProfileBlock/>
            <View style={{marginBottom: "110%"}}>
            <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
              <Tab heading="Activity"
                tabStyle={styles.tabContainerStyle}
                textStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTextStyle={styles.tabTextStyle}>
                  
                </Tab>
                <Tab heading="Achievements"
                tabStyle={styles.tabContainerStyle}
                textStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTextStyle={styles.tabTextStyle}>
                    
                </Tab>
                <Tab heading="Favourites"
                tabStyle={styles.tabContainerStyle}
                textStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTextStyle={styles.tabTextStyle}>
                    
              </Tab>
              </Tabs>
            </View>
      </View>
    );
  }
}
class CreateProfileBlock extends React.Component
{
  render() {
  return(
    <View style={styles.sectionContainer} >
      <Image
      source = {require('./ProfileImages/YerbaSteve.png')}>
      </Image>
      <View>
        <Text style={styles.sectionTitle}> Steve Yerba </Text>
        <Text style={styles.sectionDescription}>
        Registered since December 2019
        </Text>
      </View>
    </View>
    )}
}
