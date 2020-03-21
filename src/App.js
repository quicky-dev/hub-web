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


function App() {
  return (

    <Router>

        <Switch>

          <Route exact path="/" component={Welcome} />

          <Route path="/login" component={Login} />

          <Route path="/signup" component={Signup} />

          <Route path="/dashboard" component={Dashboard} />

        </Switch>

    </Router>
  );
}

export default App;
