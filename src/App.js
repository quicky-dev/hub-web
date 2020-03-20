import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to ="/">Home</Link>
            </li>

            <li>
              <Link to ="/login">Log in</Link>
            </li>

            <li>
              <Link to ="/signup">Sign Up</Link>
            </li>

            <li>
              <Link to ="/dashboard">Dashboard</Link>
            </li>
            
          </ul>
        </nav>

        <Switch>

          <Route path="/">
            {/* Insert Component */}
          </Route>

          <Route path="/login">
            {/* Insert Component */}
          </Route>

          <Route path="/signup">
            {/* Insert Component */}
          </Route>

          <Route path="/dashboard">
            {/* Insert Component */}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
