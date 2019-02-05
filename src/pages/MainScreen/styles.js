import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: metrics.basePadding,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    marginTop: metrics.baseMargin * 4,
    width: 200,
    resizeMode: 'cover',
    height: 125,
  },
  saldo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  span: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  value: {
    fontSize: 18,
  }
});

export default styles;
