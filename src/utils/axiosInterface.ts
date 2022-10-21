import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { ResourcesPropsBase } from '../store/reducers/resourcesInterface';

interface IAxiosRequestHeaders extends AxiosRequestHeaders {
  Authorization: string;
  resourceName: keyof ResourcesPropsBase;
  // @ts-ignore
  overwrite: boolean;
}

export interface IAxiosInstance extends AxiosInstance {
  config?: {
    headers?: IAxiosRequestHeaders;
  };
}

export interface IAxiosReq extends AxiosRequestConfig {
  headers?: IAxiosRequestHeaders & {
    Authorization?: string;
    resourceName?: keyof ResourcesPropsBase;
  };
  resourceName?: keyof ResourcesPropsBase;
  overwrite?: boolean;
}

interface IAxiosRequestConfig extends AxiosRequestConfig {
  resourceName: keyof ResourcesPropsBase;
  overwrite: boolean;
}

export interface AxiosRes extends AxiosResponse {
  config: IAxiosRequestConfig;
}

export type AxiosResProps<T extends keyof ResourcesPropsBase> = AxiosResponse & ResourcesPropsBase[T];
