import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export interface AuthState {
  readonly loading?: boolean;
  readonly isLogged?: boolean;
  readonly error?: boolean;
  readonly user?: {
    profileImageUrl: string;
    username: string;
  };
}
