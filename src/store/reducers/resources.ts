import _ from 'lodash';
import { combineReducers } from 'redux';
import { ResourcesPropsBase, ResourcesPropsWithId, ResourceKey } from './resourcesInterface';
import { RESOURCE_NAME } from '../../utils/constant';

const reducer =
  (resourceName: keyof ResourcesPropsBase) =>
  (state: any = {}, action: any) => {
    const resourcePath = `resources.${resourceName}`;
    let temp: any = {};

    switch (action.type) {
      case `${resourcePath}.set`:
        const data = action.payload;
        const _data = data.rows ? data.rows : [data];

        return {
          ...state,
          ..._.keyBy(_data, 'id'),
        };
      case `${resourcePath}.update`:
        return {
          ...state,
          [action.payload.id]: {
            ..._.cloneDeep(state[action.payload.id]),
            ...action.payload.data,
          },
        };
      case `${resourcePath}.overwrite`:
        const data1 = action.payload;
        const _data1 = data1.rows ? data1.rows : data1;
        return {
          ..._.keyBy(_data1, 'id'),
        };
      case `${resourcePath}.delete`:
        temp = _.cloneDeep(state);
        delete temp[action.payload.id];
        return temp;
      default:
        return state;
    }
  };

const allReducer: Record<ResourceKey, any> = {} as any;

_.forEach(RESOURCE_NAME, (resName: ResourceKey) => {
  allReducer[resName] = reducer(resName);
});

export default combineReducers<ResourcesPropsWithId>(allReducer);
