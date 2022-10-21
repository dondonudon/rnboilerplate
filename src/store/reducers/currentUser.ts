import { IAction } from '../actions/interfaces';

export interface ICurrentUser {
  id: number | undefined;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  language: string;
  workerImagePath: string;
  smoke: boolean;
  petFriendly: boolean;
  role: string | undefined;
  status: 'activated' | 'deactivated' | undefined;
}

export const SET_CURRENT_USER = 'current-user.set';
export const DEL_CURRENT_USER = 'current-user.delete';

const initialState = {
  id: undefined,
  username: '',
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  gender: '',
  dateOfBirth: '',
  language: '',
  workerImagePath: '',
  smoke: false,
  petFriendly: false,
  role: undefined,
  status: undefined,
} as ICurrentUser;

const currentUser = (state: ICurrentUser = initialState, action: IAction<ICurrentUser>): ICurrentUser => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...action.data,
      };
    case DEL_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default currentUser;
