import React, { Component } from "react";
import "./Welcome.css";
import logo from '../../assets/the-hub.png'

// figure out how to pass a component as a prop: welcome -> login

// import signup from '../signup/Signup.js'

export class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <section className="container">
          <div className="left">
            <img className="welcome-logo" src={logo} alt="The Hub." />
          </div>
          <div className="right">
              {this.props.type}
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;

// 75% media query hide left div and remove welcome shadows