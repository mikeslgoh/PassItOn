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
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        paddingHorizontal:3
    },
    sectionContainer: {
        paddingHorizontal: 24,
        borderColor: 'black',
        borderWidth: 0.2,
        paddingVertical: 10,
        flex:1,
        flexDirection:'row'
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        paddingHorizontal: 10
    },
    profileStyle: {
        flex: 1,
        flexDirection: 'column'
    }
  });

export default styles;