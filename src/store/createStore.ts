import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';

import { AuthAction, AuthState } from './modules/auth/types';

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
