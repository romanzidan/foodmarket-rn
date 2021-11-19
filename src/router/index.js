import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SignIn,
  Home,
  SplashScreen,
  SignUp,
  Order,
  SignUpAddress,
  SuccessSignUp,
  Profile,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{...TransitionPresets.ScaleFromCenterAndroid}}
      />
    </Stack.Navigator>
  );
};

export default Router;
