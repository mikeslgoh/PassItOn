import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Donate.styles';
import colors from '../common/colors.styles';

export default class DonateScreen extends React.Component {
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
  render() {
    let options = [
        {
            name: 'Time',
            navigateTo: 'ItemSearch',
            isSelected: false,
        },
        {
            name: 'Money',
            navigateTo: '',
            isSelected: false,
        }, 
        {
            name: 'Items',
            navigateTo: 'CategorySearch',
            isSelected: false,
        }, ];

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>What would you {"\n"} like to donate?</Text>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.3,
                marginBottom: '5%',
            }}
        />
        {
            options.map((option, key) => {
                return (           
                <View>
                    <TouchableOpacity
                        style={styles.roundButton}
                        onPress={() => this.props.navigation.navigate(option.navigateTo)}>
                        <Text style={styles.buttonTextStyle}>{option.name}</Text>
                    </TouchableOpacity>
                </View>
                )
            })
        }
      </View>
    );
  }
}
