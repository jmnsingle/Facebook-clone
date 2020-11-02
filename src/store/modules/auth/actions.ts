import { action } from 'typesafe-actions';
import { AuthState } from './types';

function singInRequest(history: any) {
  return action('@auth/SIGN_IN_REQUEST', { history });
}

function singInSuccess({ user }: AuthState) {
  return action('@auth/SIGN_IN_SUCCESS', { user });
}

function singInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}
// Whitout typesafe

// function singInRequest(): { type: string } {
//   return {
//     type: '@auth/SIGN_IN_REQUEST',
//   };
// }

// function singInSuccess(user: Object): { type: string; payload: Object } {
//   return {
//     type: '@auth/SIGN_IN_SUCCESS',
//     payload: {
//       user,
//     },
//   };
// }

// function singInFailure(): { type: string } {
//   return {
//     type: '@auth/SIGN_IN_FAILURE',
//   };
// }

export { singInRequest, singInSuccess, singInFailure };
