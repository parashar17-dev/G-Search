import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import Alert from './Components/Layout/Alert.js';
import About from './Components/Pages/About.js';
import User from './Components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';

const App = () => {
   return (
      <GithubState>
         <AlertState>
            <Router>
               <div className="app">
                  <Navbar icon="fab fa-github" title="G-Search" />
                  <div className="container">
                     <Alert />
                     <Switch>
                        <Route exact path="/G-Search" component={Home} />
                        <Route exact path="/G-Search/about" component={About} />
                        <Route
                           exact
                           path="/G-Search/user/:login"
                           component={User}
                        />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </AlertState>
      </GithubState>
   );
};

export default App;
