import { AppDispatch } from '..';
import axios from '../../utils/axios';
import { ResourcesPropsBase } from '../reducers/resourcesInterface';

export const setResource = (resourceName: keyof ResourcesPropsBase, payload: any) => ({
  type: `resources.${resourceName}.set`,
  payload,
});

export const updateResource = (resourceName: keyof ResourcesPropsBase, payload: any) => ({
  type: `resources.${resourceName}.update`,
  payload, // { id, data }
});

export const overwriteResource = (resourceName: keyof ResourcesPropsBase, payload: any) => ({
  type: `resources.${resourceName}.overwrite`,
  payload,
});

export const deleteResource = (resourceName: keyof ResourcesPropsBase, payload: any) => ({
  type: `resources.${resourceName}.delete`,
  payload, // id
});

export const getAllData =
  (resourceName: keyof ResourcesPropsBase, query: string = '', overwrite: boolean = true) =>
  async () => {
    const { data } = await axios.get(`/${resourceName}?${query}`, {
      headers: {
        resourceName,
        // @ts-ignore
        overwrite,
      },
    });

    return data;
  };

export const getDataById =
  (resourceName: keyof ResourcesPropsBase, id: number, query: string = '', overwrite: boolean = false) =>
  async () => {
    const { data } = await axios.get(`/${resourceName}/${id}?${query}`, {
      headers: {
        resourceName,
        // @ts-ignore
        overwrite,
      },
    });

    return data;
  };

export const updateData =
  (resourceName: keyof ResourcesPropsBase) =>
  (id: number, update: any, query: string = '') =>
  async () => {
    const { data } = await axios.patch(`/${resourceName}/${id}?${query}`, update, {
      headers: {
        resourceName,
      },
    });

    return data;
  };

export const addData = (resourceName: keyof ResourcesPropsBase) => (payload: any) => async (dispatch: AppDispatch) => {
  const { data } = await axios.post(`/${resourceName}`, payload, {
    headers: {
      resourceName,
    },
  });

  return dispatch(updateResource(resourceName, { id: data.id, data }));
};

export const deleteData = (resourceName: keyof ResourcesPropsBase, id: number) => async () => {
  await axios.delete(`/${resourceName}/${id}`);

  return getAllData(resourceName)();
};
