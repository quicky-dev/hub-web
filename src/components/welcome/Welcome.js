import React, { Component } from "react";
import "./Welcome.css";

export class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <section className="container">
          <div className="left">
            <h1>The Hub.</h1>
          </div>
          <div className="right">
            {/* Signup/Login Form Component Here */}
            <h3>Form</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
