import { AuthAction, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  isLogged: false,
  error: false,
  user: {
    profileImageUrl: '',
    username: '',
  },
};

export default function auth(
  state = INITIAL_STATE,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogged: true,
        user: action.payload.user,
      };

    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
