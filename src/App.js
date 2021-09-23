import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Home} from './Pages/Home';
import {User} from './Pages/User';

export const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
};