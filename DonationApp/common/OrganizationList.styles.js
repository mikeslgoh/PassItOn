import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: 'white',
    },
    sectionContainer: {
      paddingHorizontal: 24,
      borderColor: 'black',
      borderWidth: 0.2,
      paddingVertical: 10,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: 'blue',
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: 'blue',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

export default styles;
  