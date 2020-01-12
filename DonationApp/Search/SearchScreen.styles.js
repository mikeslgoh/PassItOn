import { StyleSheet } from 'react-native';
import colors from '../common/colors.styles';

const styles = StyleSheet.create({
    searchBarContainer: {
        marginTop: '5%',
        marginHorizontal: '4%',
        borderWidth: 0.5,
    },
    tabContainerStyle: {
        backgroundColor: 'white',
    },
    tabTextStyle: {
        color: colors.main.color,
    },
    activeTabStyle: {
        backgroundColor: 'white',
    },
    tabBarUnderlineStyle: {
        backgroundColor: colors.main.color,
    }
  });


  export default styles;