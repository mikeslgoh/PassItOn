import {StyleSheet} from 'react-native';
import colors from '../common/colors.styles';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 48,
    color: colors.main.color,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '30%',
    marginBottom: '20%'
  },
  roundButton: {
    alignItems: 'center',
    backgroundColor: colors.main.color,
    padding: 15,
    textAlign: 'center',
    marginTop: '20%',
    marginHorizontal: '30%',
    borderRadius: 6,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  errorTextStyle: {
    fontSize: 16,
    color: 'red',
    alignSelf: 'center'
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginHorizontal: '10%',
    marginTop: 5,
  },
});

export default styles;
