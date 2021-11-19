import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {SignIn, SplashScreen} from '../pages';
import SignUp from '../pages/SignUp';

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
    </Stack.Navigator>
  );
};

export default Router;
