import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

// import history from 'react-router-redux';

// import history from '../../../services/history';

import { authProvider, reduxSagaFirebase } from '../../../config/firebase';
import * as actions from './actions';

export function* signIn({ payload }: ActionType<typeof actions.singInRequest>) {
  try {
    const { history } = payload;

    const credentials = yield call(
      reduxSagaFirebase.auth.signInWithPopup,
      authProvider,
    );

    const userInfo = yield call(
      reduxSagaFirebase.auth.signInWithCredential,
      credentials,
    );
    console.log(userInfo);
    console.log(userInfo.additionalUserInfo);
    console.log(userInfo.additionalUserInfo.profile);
    console.log(userInfo.additionalUserInfo.profile.picture);
    console.log(userInfo.additionalUserInfo.profile.name);

    // Object.assign(user, {
    //   profileImageUrl: user.additionalUserInfo.profile.picture,
    //   username: user.additionalUserInfo.profile.name,
    // });
    const user = {
      profileImageUrl: userInfo.additionalUserInfo.profile.picture,
      username: userInfo.additionalUserInfo.profile.name,
    };

    console.log('teste: ', user);
    // console.log(user.additionalUserInfo.profile);
    yield put(actions.singInSuccess({ user }));

    // history.push('/home');
    history.push('/home');
  } catch (error) {
    yield put(actions.singInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
