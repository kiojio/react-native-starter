import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    color: '#72787c',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    color: colors.darkPurple,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
