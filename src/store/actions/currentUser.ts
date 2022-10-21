import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch } from '..';
import axios from '../../utils/axios';
import { DEL_CURRENT_USER, SET_CURRENT_USER } from '../reducers/currentUser';

export const setUser = (payload: any) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_CURRENT_USER, data: payload.data });
};

export const getCurrentUser = (id: number | string) => async (dispatch: AppDispatch) => {
  const { data } = await axios.get(`/workers/${id}`);

  return dispatch({
    type: SET_CURRENT_USER,
    data,
  });
};

interface ILogin {
  email: string;
  password: string;
  role: string;
}

export const logIn = (payload: ILogin) => async (dispatch: AppDispatch) => {
  const { data: loginResult } = await axios.post('/login', payload);

  await AsyncStorage.setItem('id', loginResult.id.toString());
  await AsyncStorage.setItem('access_token', loginResult.token);

  const { data } = await axios.get(`/workers/${loginResult.id}`);

  return dispatch({
    type: SET_CURRENT_USER,
    data,
  });
};

export const updateProfile = (id: any, payload: FormData | Object) => async (dispatch: AppDispatch) => {
  const { data } = await axios.patch(`/workers/${id}`, payload);

  return dispatch({
    type: SET_CURRENT_USER,
    data,
  });
};

export const logOut = () => async (dispatch: AppDispatch) => {
  await AsyncStorage.removeItem('id');
  await AsyncStorage.removeItem('access_token');

  return dispatch({ type: DEL_CURRENT_USER });
};
