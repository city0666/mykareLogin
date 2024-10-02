import Login from '@app/screen/Auth/Login';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '@app/screen/Home';
import Navigations from '@app/utils/typeNav';
import SignUp from '@app/screen/Auth/SignUp';
export type RootStackParmList = {
  Authbording: NavigatorScreenParams<AuthStackparamList>;
};

export type AuthStackparamList = {
  Login: undefined;
  SignUp: undefined;
};
export type InnerStackparamList = {
  home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParmList>();
const InnerStack = createNativeStackNavigator<InnerStackparamList>();
const Authstack = createNativeStackNavigator<AuthStackparamList>();

const AuthNavigator = () => {
  return (
    <Authstack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
      initialRouteName={Navigations.login}>
      <Authstack.Group>


        <Authstack.Screen name={Navigations.login} component={Login} />
        <Authstack.Screen name={Navigations.signup} component={SignUp} />

      </Authstack.Group>

    </Authstack.Navigator>
  );
};

export const RootNavigator = () => {


  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}>
      <RootStack.Screen
        name={Navigations.authbording}
        component={AuthNavigator}
      />

    </RootStack.Navigator>
  );
};




export const InnerNavigator = () => {


  return (
    <InnerStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
      initialRouteName={Navigations.home}
    >
      <InnerStack.Screen
        name={Navigations.home}
        component={Home}
      />

    </InnerStack.Navigator>
  );
};