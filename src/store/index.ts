import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import { applyInterceptors } from '../utils/axios';

// persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['currentUser'],
};

// @ts-ignore
const rootReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export const { dispatch } = store;

applyInterceptors(dispatch);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducers>;
