import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { StoreState } from '../store/createStore';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<PrivateRouteProps> = (
  { component: Component, isPrivate = false },
  ...rest
) => {
  const { isLogged } = useSelector((state: StoreState) => state.auth);

  console.log('logged: ', isLogged);
  console.log('private: ', isLogged);

  if (!isLogged && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default RouteWrapper;
