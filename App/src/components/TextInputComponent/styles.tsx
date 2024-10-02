import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { COLORS, SIZES, FONTS } from '@app/constants/themes';

// type Styles = {
//   container: object;
//   inputStyle: object;
//   upperLabelStyle: object;
// };

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    //  borderColor: COLORS.border,
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: SIZES.baseX4,
  },
  inputStyle: {
    flex: 1,
    ...FONTS.regular,
    // marginRight: 10,
    color: useColorScheme() === 'light' ? COLORS.black : COLORS.gray,
    fontSize: 14,
    marginLeft: 5,
  },
  upperLabelStyle: {
    color: '#8592B2',
    ...FONTS.medium,
    fontSize: 14,
    marginBottom: SIZES.base,
    lineHeight: 17,
  },
});
