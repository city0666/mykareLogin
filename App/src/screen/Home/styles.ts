import {StyleSheet} from 'react-native';
import { COLORS, SIZES, FONTS } from '@app/constants/themes';
export const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: SIZES.baseX4,
    flex: 1,
    backgroundColor:COLORS.white,
  },
  userbox:{
    flex:0.65,
   // justifyContent:'center',
    alignSelf:'center',
  },
  header:{
    flex:0.29,
    backgroundColor:COLORS.blue1,
  },

  signUpContainer: {
    marginTop: SIZES.baseX4,
    flex: 1,
    paddingHorizontal: SIZES.baseX2,
  },

  title:{
    ...FONTS.regular,
    fontSize: SIZES.baseX5,
    color:COLORS.black,
    marginHorizontal:SIZES.baseX2
  
  }
});