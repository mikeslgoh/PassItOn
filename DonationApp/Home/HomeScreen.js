import React from 'react';
import { View, Text } from 'react-native';
import { Tabs, Tab } from 'native-base';

import colors from '../common/colors.styles';
import styles from './HomeScreen.styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle :{
      textAlign: 'center',
      alignSelf:'center'
    },
    headerStyle:{
        backgroundColor: colors.main.color,
    },
};
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.titleStyle}>Welcome Back, Steven!</Text>
        <View style={{marginTop: 20}}>
            <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
                <Tab heading="NEWSFEED"
                  tabStyle={styles.tabContainerStyle}
                  textStyle={styles.tabTextStyle}
                  activeTabStyle={styles.activeTabStyle}
                  activeTextStyle={styles.tabTextStyle}>
                    
                </Tab>
                <Tab heading="DONATIONS"
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
