import { StyleSheet } from 'react-native';

import { colors, general, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: metrics.basePadding + 5,
    backgroundColor: colors.white,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.baseMargin * 2,
  },
  logo: {
    // marginTop: metrics.baseMargin * 4,
    width: 120,
    height: 125,
  },
  form: {

  },
  input: {
    // marginBottom: metrics.baseMargin,
    padding: metrics.basePadding / 2,
    fontSize: 15,
    color: colors.white,
    width: '100%',
    borderBottomWidth: 0,
  },
  inputIcon: {
    width: 20,
    color: colors.white,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.textThirdTransparent,
    paddingHorizontal: metrics.basePadding / 2,
    borderWidth: 0,
    height: 50,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin,
  },
  label: {
    marginBottom: metrics.baseMargin,
    fontSize: 15,
  },
  button: {
    ...general.button,
    paddingVertical: metrics.basePadding - 4,
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    ...general.buttonText,
  },
  small: {
    color: colors.dark,
  },
  span: {
    color: colors.dark,
  },
  error: {
    color: colors.danger,
    marginBottom: metrics.baseMargin / 5,
  },
});

export default styles;
