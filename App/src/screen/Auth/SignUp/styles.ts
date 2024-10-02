import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // top: -20,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // // justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingVertical: SIZES.baseX5,
  },
  header: {
    //     font-family: 'Inter';
    // font-style: normal;
    // font-weight: 700;
    // font-size: 24px;
    // line-height: 32px;
    /* or 133% */

    // text-align: center;
    // letter-spacing: -0.01em;
    ...FONTS.semiBold,
    color: COLORS.grayDark,
    fontSize: 24,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  signUpContainer: {
    marginTop: SIZES.baseX4,
    flex: 1,
    paddingHorizontal: SIZES.baseX2,
  },
  innerContainer: {
    // alignItems: 'center',
    flex: 1,
    paddingHorizontal: SIZES.baseX5 * 1.5,
  },
  headerTitle: {
    ...FONTS.medium,
    fontSize: 18,
    color: '#1D2226',
    marginTop: SIZES.base,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // paddingHorizontal: SIZES.baseX4,
    // marginTop: SIZES.baseX5,
  },
});
