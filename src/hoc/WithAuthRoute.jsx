import {
  Route,
  Redirect,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentSubscriptionAsync} from '../store/subscriptions/action';

export function WithAuthRoute({children, ...rest}) {
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();

  return <Route
      {...rest}
      render={({location}) => {
        if (profile) {
          dispatch(getCurrentSubscriptionAsync());

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
