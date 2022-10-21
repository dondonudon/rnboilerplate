import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

export type AuthStackTypes = {
  Login: undefined;
  ForgetPassword: undefined;
  ResetPassword: undefined;
  Home: undefined;
};

export type TabBarTypes = {
  RosterStack: undefined;
  TimesheetStack: undefined;
  DocumentStack: undefined;
  ProfileStack: undefined;
};

export type AuthNavProps<T extends keyof AuthStackTypes> = StackScreenProps<AuthStackTypes, T>;
export type TabBarProps<T extends keyof TabBarTypes> = BottomTabScreenProps<TabBarTypes, T>;

export type BottomScreenNavProps = React.FC<any>;
