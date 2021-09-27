import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import {Authorization} from './pages/Authorization';
import {Home} from './pages/Home';
import {ProvideAuth} from './hoc/ProvideAuth';
import {WithAuthRoute} from './hoc/WithAuthRoute';
import {WithoutAuthRoute} from './hoc/WithoutAuthRoute';

export const App = () => {
  return (
      <ProvideAuth>
        <Router>
          <Switch>
            <WithAuthRoute exact path="/home">
              <Home/>
            </WithAuthRoute>
            <WithoutAuthRoute exact path="/">
              <Authorization/>
            </WithoutAuthRoute>
          </Switch>
        </Router>
      </ProvideAuth>
  );
};