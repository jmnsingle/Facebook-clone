import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StoreState } from '../../store/createStore';
import { singInRequest } from '../../store/modules/auth/actions';

// import { auth, provider } from '../../config/teste';

import { Container } from './styles';

const Login: React.FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { loading, isLogged, user, error } = useSelector(
    (state: StoreState) => state.auth,
  );

  const handleSignIn = () => {
    // console.log('user: ', user);

    // auth.signInWithPopup(provider).then(response => {
    //   console.log(response);
    // });
    dispatch(singInRequest(history));
  };

  return (
    <Container>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="Facebook"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook"
        />
      </div>

      <button type="submit" onClick={handleSignIn}>
        SignIn
      </button>
    </Container>
  );
};

export default Login;
