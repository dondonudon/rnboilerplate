import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {AppDispatch} from '../store';
import {
  overwriteResource,
  setResource,
  updateResource,
} from '../store/actions/resources';
import {AxiosRes, IAxiosInstance, IAxiosReq} from './axiosInterface';
import {ENV} from './constant';

const instance: IAxiosInstance = axios.create({
  baseURL: ENV.API_URL,
});

export const applyInterceptors = (dispatch: AppDispatch) => {
  instance.interceptors.request.use(
    // @ts-ignore
    async (config: IAxiosReq) => {
      const token = await AsyncStorage.getItem('access_token');

      const tokenHeader = config.headers ? config.headers.Authorization : '';

      if (config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : tokenHeader;
        config.resourceName = config.headers.resourceName;
        config.overwrite = config.headers.overwrite;
      }

      return config;
    },
    (err: any) => Promise.reject(err),
  );

  instance.interceptors.response.use((response: any) => {
    const {config, data} = response as AxiosRes;

    if (!config.resourceName) {
      return response;
    }

    if (config.overwrite) {
      dispatch(overwriteResource(config.resourceName, data));
    } else if (config.method === 'patch') {
      dispatch(updateResource(config.resourceName, {id: data.id, data}));
    } else {
      dispatch(setResource(config.resourceName, data));
    }

    return response;
  });
};

export default instance;
