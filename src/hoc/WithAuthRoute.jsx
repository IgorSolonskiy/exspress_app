import {
  Route,
  Redirect,
} from 'react-router-dom';
import {useSelector} from 'react-redux';

export function WithAuthRoute({children, ...rest}) {
  const profile = useSelector(state => state.auth.profile);

  return <Route
      {...rest}
      render={({location}) => {
        if (profile) {

          return children;
        }

        return <Redirect
            to={{
              pathname: '/',
              state: {from: location},
            }}
        />;
      }}
  />;
}
