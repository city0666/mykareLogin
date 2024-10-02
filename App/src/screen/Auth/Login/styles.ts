import {StyleSheet} from 'react-native';
import { COLORS, SIZES, FONTS } from '@app/constants/themes';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.baseX4,
    flex: 1,
  },
  selectButtonWrap: {
    // marginTop: SIZES.baseX4 * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SIZES.baseX4,
    paddingHorizontal: SIZES.baseX2,
  },

  signUpContainer: {
    marginTop: SIZES.baseX4,
    flex: 1,
    paddingHorizontal: SIZES.baseX2,
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
    fontSize: 22,
  },
  verifiedWrap: isVerify => ({
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: isVerify ? COLORS.orange : COLORS.white,
    borderColor: COLORS.orange,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  }),
  termsAndConditionWrap: {
    // bottom: 20,
    marginVertical: SIZES.baseX5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsAndConditionText: {
    fontSize: 12,
    ...FONTS.regular,
    color: COLORS.gray2,
  },
  termsAndConditionClick: {
    fontSize: 12,
    ...FONTS.regular,
    color: COLORS.orange,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: COLORS.orange,
  },
  forgotWrap: {
    alignItems: 'center',
  },
  forgotText: {
    ...FONTS.medium,
    fontSize: 14,
    color: COLORS.blue2,
  },
  bottomWrap: {
    marginVertical: SIZES.baseX4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  orText: {
    ...FONTS.medium,
    fontSize: 15,
    color: COLORS.black,
    marginVertical: SIZES.base,
  },
  fingerPrintText: {
    ...FONTS.regular,
    fontSize: 13,
    color: COLORS.orange2,
  },
  signup: {
    ...FONTS.medium,
    fontSize: 13,
    color: COLORS.blue2,
  },
  iconbg:{
    height:25,width:25,backgroundColor:'#E3E4E9',borderRadius:13,alignItems:'center',justifyContent:'center'
}
});