import {
  Route,
  Redirect,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPostsAsync} from '../store/posts/actions';

export function WithAuthRoute({children, ...rest}) {
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();

  return <Route
      {...rest}
      render={({location}) => {
        if (profile) {
          dispatch(getPostsAsync(profile.username))

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
