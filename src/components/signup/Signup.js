import React, { Component } from 'react';
import '../signup/Signup.css'
class Signup extends Component {
    render() {
        return(
            <div class="form-container">
                <form action="" method="post" class="signup-form">
                <div id="form-row">
                    <h1 class="form-label">Sign Up</h1>
                </div>
                <div id="form-row">
                    <input class="form-field"  type="email" placeholder="email" name="email" id="email" required />
                </div>
                <div id="form-row">
                    <input class="form-field" type="text" placeholder="username" name="username" id="username" required />
                </div>
                <div id="form-row">
                    <input class="form-field" type="password" placeholder="password" name="password" id="password" required />
                </div>
                <div id="form-row">
                    <input class="form-button" type="submit" value="Sign Up"/>
                </div>
            </form>
            </div>
        );
    }
}

export default Signup;