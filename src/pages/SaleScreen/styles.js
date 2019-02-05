import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: metrics.basePadding,
    flexDirection: 'column',
  },
  contentItemHeader: {
    width: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: metrics.basePadding / 2,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
  contentItem: {
    marginBottom: metrics.baseMargin,
  },
  contentItemBody: {
    backgroundColor: colors.lighter,
    width: '100%',
    padding: metrics.basePadding / 2,
  },
  itemHeaderTitle: {
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: 17,
  },
  itemText: {
    fontSize: 16,
  },
  itemButton: {
    backgroundColor: colors.primary,
    padding: metrics.basePadding / 2,
  },
  itemButtonText: {
    textAlign: 'center',
    color: colors.white,
  },
  span: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.lighter,
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
  },
  containerModal: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
  },
  submit: {
    width: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius * 2,
    marginTop: metrics.baseMargin,
  },
  submitText: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.white,
  },
  label: {
    marginBottom: metrics.baseMargin,
    fontWeight: 'bold',
  },
});

export default styles;
