import _ from 'lodash';
import { RootState } from '..';

export const getResource = (resourceName: string) => (state: { resources: any }) => state.resources[resourceName];

export const getResourceById = (resource: string, id: string) => (state: RootState) => {
  const resourceState = getResource(resource)(state);
  return _.find(resourceState, { id });
};
