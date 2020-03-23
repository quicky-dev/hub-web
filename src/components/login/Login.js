import React, { Component } from "react";
import "../login/Login.css";
class Login extends Component {
  render() {
    return (
      <div class="form-container">
        <form action="" method="post" class="login-form">
          <div id="form-row">
            <h1 class="form-label">Login</h1>
          </div>
          <div id="form-row">
            {/* <label for="username">Username</label> */}
            <input
              class="form-field"
              type="text"
              placeholder="username"
              name="username"
              id="username"
              required
            />
          </div>
          <div id="form-row">
            {/* <label for="password">Password</label> */}
            <input
              class="form-field"
              type="password"
              placeholder="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div id="form-row" class="button-row">
            <input class="form-button" type="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
