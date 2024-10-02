import {useColorScheme} from 'react-native';
import {COLORS} from '@app/constants';

type ColorScheme = {
  background: string;
  text: string;
  texttitle: string;
  bordercolor: string;
  safecolor: string;
  head: string;
  textgrey: string;
  profilein: string;
  prinput: string;
  bsstatus: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';

};

const Colors: {light: ColorScheme; dark: ColorScheme} = {
  light: {
    bsstatus: COLORS.gray2,
    background: COLORS.white,
    text: COLORS.blackbg,
    texttitle: COLORS.grayDark,
    bordercolor: COLORS.gray2,
    safecolor: COLORS.gray,
    head: COLORS.white,
    textgrey: COLORS.gray2,
    profilein: 'rgba(225, 227, 234, 1)',
    prinput: 'rgba(126, 130, 153, 1)',
    barStyle:'dark-content',
    
  },
  dark: {
    bsstatus: COLORS.secondary,
    background: COLORS.blackbg,
    text: COLORS.white,
    texttitle: COLORS.gray2,
    textgrey: COLORS.gray2,
    bordercolor: COLORS.white,
    safecolor: COLORS.blackbg,
    head: COLORS.bgnormal,
    profilein: 'rgba(74, 74, 112, 1)',
    prinput: 'rgba(161, 165, 183, 1)',
    barStyle:'light-content',

  },
};

const useThemeColors = (): ColorScheme => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return colors;
};

export default useThemeColors;
