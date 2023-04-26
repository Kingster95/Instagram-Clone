import { Dimensions, PixelRatio, Platform } from 'react-native';

export const responsiveFont = (size: number) => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const scale = SCREEN_WIDTH / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const size = {
  storyCover: responsiveFont(59),
  story: responsiveFont(55),
  extraLarge:responsiveFont(50),
  h1: responsiveFont(38),
  h2: responsiveFont(32),
  h3: responsiveFont(30),
  storyRadius: responsiveFont(28),
  h4: responsiveFont(26),
  h45: responsiveFont(23),
  h5: responsiveFont(20),
  h6: responsiveFont(19),
  input: responsiveFont(18),
  regular: responsiveFont(16),
  medium: responsiveFont(14),
  small: responsiveFont(12),
  smallTiny: responsiveFont(10),
  tiny: responsiveFont(8.5),
  iconMap: responsiveFont(23),
  descriptions: responsiveFont(11),
};

export default size;
