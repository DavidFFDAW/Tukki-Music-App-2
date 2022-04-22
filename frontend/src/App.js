import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { routes } from './constants/routes';

import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/LogInPage';

import './App.css';

function App() {
  
  return (
    <UserContextProvider>
      <Router>          
          <Switch>        
            <Route path={ routes.home } exact>
              { /* component */ }
            </Route>

            <Route path={ routes.login } exact>
              <Login />
            </Route>

            <PrivateRoute path={ ''/* INSERT YOUR ROUTE NAME IN HERE */ }>
              { /* component */ }
            </PrivateRoute>
                      
          </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
