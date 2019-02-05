import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
  error: {
    fontFamily: 'Montserrat-Regular',
    marginBottom: metrics.baseMargin,
    color: colors.danger,
  },
});

export default styles;
