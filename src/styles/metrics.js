import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  screenWidth: viewportWidth < viewportHeight ? viewportWidth : viewportHeight,
  screenHeight: viewportWidth < viewportHeight ? viewportWidth : viewportHeight,
};
