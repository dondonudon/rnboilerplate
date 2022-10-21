import { RESOURCE_NAME } from '../../utils/constant';

export interface IParamListBase {
  [key: string]: object | undefined;
}

export interface UserProps {
  id: number | string;
  email: string;
  username: string;
}

export interface ConfigProps {
  id: number;
  key: string;
  value: string;
}

export type ResourcesPropsBase = {
  users: UserProps;
  configs: ConfigProps;
};

// For reducers
export type FlexibleResources<T extends ResourceKey> = {
  rows: {
    [id: number]: ResourcesPropsBase[T]; // id : {...}
  };
  total: number;
  page: number;
};

export type ResourcesPropsWithId = {
  users: FlexibleResources<'users'>;
};

export type ResourceKey = typeof RESOURCE_NAME[keyof typeof RESOURCE_NAME];

export type SelectedResourceProps<
  ParamList extends IParamListBase,
  ResourceName extends keyof ParamList = keyof ParamList
> = ParamList[ResourceName];

export type ResourceProps<T extends ResourceKey> = SelectedResourceProps<ResourcesPropsBase, T>;

export type ResourcesProps<T extends ResourceKey> = SelectedResourceProps<ResourcesPropsWithId, T>;
