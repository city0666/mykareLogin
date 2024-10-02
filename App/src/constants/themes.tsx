import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#4A4A70',
  secondary: '#1E1E2D',
  bgnormal02: '#4A4A70',
  bgnormal: '#1E1E2D',
  pink: 'rgba(241, 65, 108, 1)',
  bgfull: '#1E1E1E',
  white: '#FFFFFF',
  blackbg: '#1E1E1E',
  black: '#000000',
  black2: '#1A1A1A',
  black3: '#333333',
  orange: '#FD960B',
  orange2: '#FE7A1D',
  orange3: '#FCB300',
  orange4: '#FD8E10',

  gray: '#E1E3EA',
  gray2: '#A1A5B7',
  gray3: '#777777',
  gray4: '#999999',
  grayDark: '#3F4254',
  gray5: '#A1A5B7',
  green: '#0D7739',
  green1:'#45B50D',
  red: '#ED2330',
  blue1: '#02A5FE',
  blue: '#02A5FE',
  blue2:'#009EF6'
};

export const SIZES = {
  width,
  height,
  base: 8,
  baseX2: 12,
  baseX3: 14,
  baseX4: 16,
  baseX8: 18,
  baseX5: 24,
  radius: 6,
};

export const FONTS = {
  bold: { fontFamily: 'Rubik-Bold', fontSize: SIZES.baseX2, lineHeight: 22 },
  semiBold: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: SIZES.baseX4,
    lineHeight: 22,
  },
  extraBold: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: SIZES.baseX5,
    lineHeight: 22,
  },
  medium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.baseX2,
    lineHeight: 18,
  },
  regular: {
    fontFamily: 'Rubik-Regular',
    fontSize: SIZES.baseX3,
    lineHeight: 22,
  },
  light: {
    fontFamily: 'Rubik-Light',
    fontSize: SIZES.baseX3,
    lineHeight: 20,
  },
};

const appTheme = { COLORS, SIZES, FONTS, width, height };

export default appTheme;
