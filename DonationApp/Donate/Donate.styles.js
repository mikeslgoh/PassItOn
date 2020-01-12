import { StyleSheet } from 'react-native';
import colors from '../common/colors.styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '400',
    paddingBottom: '5%',
  },
    roundButton: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 15,
      textAlign: 'center',
      marginVertical: '3%',
      marginHorizontal: '30%',
      borderRadius: 6,
    },
    buttonTextStyle: {
      fontSize: 16,
    },
    selectedButton: {
      alignItems: 'center',
      backgroundColor: colors.main.color,
      padding: 15,
      textAlign: 'center',
      marginVertical: '3%',
      marginHorizontal: '30%',
      borderRadius: 6,
    },
  });


  export default styles;