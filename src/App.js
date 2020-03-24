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
import Script from './components/script/Script.js'

function App() {
  return (

    <Router>

        <Switch>

          <Route exact path="/">
            <Welcome type={<Login />}/>
          </Route>


          <Route path="/signup">
            <Welcome type={<Signup />}/>
          </Route>

          <Route path="/dashboard">
            <Dashboard user="MakeSchool"/>
          </Route>

          <Route path="/user/girugamesh">
            <Profile />
          </Route>

          <Route path="/script/girugamesh-1">
            <Script />
          </Route>

        </Switch>

    </Router>
  );
}

export default App;
