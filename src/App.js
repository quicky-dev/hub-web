import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from './components/welcome/Welcome.js'
import Login from './components/login/Login.js'
import Signup from './components/signup/Signup.js'
import Dashboard from './components/dashboard/Dashboard.js'
import Profile from './components/profile/Profile.js'

function App() {
  return (

    <Router>

        <Switch>

          <Route exact path="/">
            <Welcome type={<Login />}/>
          </Route>

          <Route path="/login" component={Login} />

          <Route path="/signup">
            <Welcome type={<Signup />}/>
          </Route>

          <Route path="/dashboard" component={Dashboard} />

          <Route path="/user/username">
            <Profile />
          </Route>

        </Switch>

    </Router>
  );
}

export default App;
