import { ResourceKey, ResourceProps } from '../reducers/resourcesInterface';

interface IPayload<K> {
  id: number;
  data: K;
}

interface IPayloads<T extends ResourceKey> {
  rows: ResourceProps<T>[];
  total: number;
  page: number;
}

export interface IAction<T extends ResourceKey, K extends ResourceProps<T>> {
  type: string;
  payload: IPayload<K> | IPayloads<T> | number;
}
