import { StyleSheet } from 'react-native';
import colors from '../common/colors.styles';

const styles = StyleSheet.create({
    titleStyle:{
        fontWeight: 'bold',
        fontSize: 28,
        marginLeft: 10,
        marginTop: 20,
    },
    tabContainerStyle: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderTopWidth: 0.3,
        borderBottomWidth: 0.5,
    },
    tabTextStyle: {
        color: colors.main.color,
    },
    activeTabStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0.3,
    },
    tabBarUnderlineStyle: {
        backgroundColor: colors.main.color,
    },
    background: {
        backgroundColor: '#fff',
    }
  });

export default styles;