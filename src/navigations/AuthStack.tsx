import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import { AuthStackType } from '../utils/authInterfaces';
import TabScreenNavigation from './TabStack';

const Stack = createStackNavigator<AuthStackType>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabScreenNavigation} />
    </Stack.Navigator>
  );
};

export default AuthStack;
