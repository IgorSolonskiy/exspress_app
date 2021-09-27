import {
  Route,
  Redirect,
} from 'react-router-dom';
import {useSelector} from 'react-redux';

export function WithoutAuthRoute({children, ...rest}) {
  const profile = useSelector(state => state.auth.profile);

  return <Route
      {...rest}
      render={({location}) => {
        if (!profile) {
          return children;
        }

        return <Redirect
            to={{
              pathname: '/home',
              state: {from: location},
            }}
        />;
      }}
  />;
}
