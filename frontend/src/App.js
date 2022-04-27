import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { routes } from './constants/routes';

import { PrivateRoute } from './components/PrivateRoute';
import Header from './components/Header/Header';
import MusicPlayer from './components/MusicPlayer/Player';

import { Login } from './pages/LogInPage';
import HomePage from './pages/HomePage';
import MixCreation from './pages/MixCreation';

import './App.css';

function App() {

  
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          {/* # Public route: can be accesed from anywhere */}
          <Route path={ routes.login } exact>
            <Login />
          </Route>
          
          {/* # Private routes that do not need the header and the music player */}          
          {/* <PrivateRoute path={'/route/without/header/and/player'} exact>
            <HomePage />
          </PrivateRoute> */}
      
          {/* # Private routes that share the header and the music player */}          
          <PrivateRoute path={'/'}>
          <Header />
          
            <Switch>
              <PrivateRoute path={'/'} exact>
                <HomePage />
              </PrivateRoute>

              <PrivateRoute path={'/mix/create'} exact>
                {/* <h1>Boludo</h1> */}
                <MixCreation/>
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
