import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { routes } from './constants/routes';

import { PrivateRoute } from './components/PrivateRoute';
import Header from './components/Header/Header';
import MusicPlayer from './components/MusicPlayer/Player';

import { Login } from './pages/LogInPage';
import HomePage from './pages/HomePage';

import './App.css';

function App() {

  // const hist = useHistory();
  // const location = useLocation();  
  // hist.replace(location.pathname.replace('http://vps-f87b433e.vps.ovh.net:8652/', 'www.tukki.com/'));
  
  return (
    <UserContextProvider>
      <Router>
          <Switch>        
            <Route path={ routes.login } exact>
              <Login />
            </Route>
        
            <PrivateRoute path={routes.home} exact>
              <Header />

              <Switch>
                <PrivateRoute path={ routes.home }>
                  <HomePage />
                </PrivateRoute>

                <PrivateRoute path={ '/mixes' }>
                  <h4>Tus Mixes</h4>
                </PrivateRoute>
              </Switch>

              <MusicPlayer width={ '100%' }/>
            </PrivateRoute>
                
          </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
