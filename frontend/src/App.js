import { Route, Switch, BrowserRouter as Router, useHistory,useLocation } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { routes } from './constants/routes';

import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/LogInPage';

import './App.css';

function App() {

  const hist = useHistory();
  const location = useLocation();  
  hist.replace(location.pathname.replace('http://vps-f87b433e.vps.ovh.net:8652/', 'www.tukki.com/'));
  
  return (
    <UserContextProvider>
      <Router>          
          <Switch>        
            <PrivateRoute path={ routes.home } exact>
              { /* component */ }
            </PrivateRoute>

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
