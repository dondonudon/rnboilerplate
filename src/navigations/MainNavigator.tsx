import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Linking, StatusBar } from 'react-native';
import { ICurrentUser } from '../store/reducers/currentUser';
import AuthStack from './AuthStack';
import TabStack from './TabStack';

interface IJwtDecode extends Omit<JwtPayload, 'exp' | 'iat'> {
  foo: string;
  exp: number;
  iat: number;
}

const MainNavigator = ({ getCurrentUser, currentUser }: { getCurrentUser: Function; currentUser: ICurrentUser }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const checkToken = async () => {
    const accessToken = await AsyncStorage.getItem('access_token');

    if (accessToken) {
      const decode = jwtDecode<IJwtDecode>(accessToken);

      if (decode && Date.now() > decode.exp * 1000) {
        await AsyncStorage.removeItem('access_token');
        setAuthenticated(false);
        return;
      }

      if (_.isEmpty(currentUser.id)) {
        const id = await AsyncStorage.getItem('id');
        if (id) getCurrentUser(id);
      }

      setAuthenticated(true);
    } else setAuthenticated(false);
  };

  useEffect(() => {
    checkToken();
  }, [currentUser?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const getLink = async () => {
      await Linking.getInitialURL();
    };

    getLink();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {!authenticated ? <AuthStack /> : <TabStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
