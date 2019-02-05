import { colors, metrics } from 'styles';

export default {
  button: {
    padding: metrics.basePadding / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius * 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  paragraph: {
    color: colors.white,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 15,
  },
};
