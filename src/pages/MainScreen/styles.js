import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: metrics.basePadding,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
});

export default styles;
