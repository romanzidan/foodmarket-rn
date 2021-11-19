import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {
  SignIn,
  SplashScreen,
  SignUp,
  SignUpAddress,
  SuccessSignUp,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{...TransitionPresets.FadeFromBottomAndroid}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{...TransitionPresets.ScaleFromCenterAndroid}}
      />
    </Stack.Navigator>
  );
};

export default Router;
