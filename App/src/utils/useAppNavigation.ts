import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParmList} from '@app/navigations/AllController';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParmList>>();
};