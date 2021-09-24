import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import {Home} from './Pages/Home';
import {User} from './Pages/User';
import {ProvideAuth} from './hoc/ProvideAuth';
import {WithAuthRoute} from './hoc/WithAuthRoute';
import {WithoutAuthRoute} from './hoc/WithoutAuthRoute';

export const App = () => {
  return (
      <ProvideAuth>
        <Router>
          <Switch>
            <WithAuthRoute exact path="/user">
              <User/>
            </WithAuthRoute>
            <WithoutAuthRoute exact path="/">
              <Home/>
            </WithoutAuthRoute>
          </Switch>
        </Router>
      </ProvideAuth>
  );
};