import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import authReducer from './auth/reducers';

export default combineReducers<StoreState>({
  auth: authReducer,
});
