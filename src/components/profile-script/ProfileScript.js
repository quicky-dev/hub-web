import React, { Component } from "react";
import "../profile-script/ProfileScript.css";

class ProfileScript extends Component {
    render() {
        return (
            <div className="script">
                <h4 href="#">{this.props.name}</h4>
                <h4>{this.props.date}</h4>
                {/* tags can go here and be css styled */}
                {/* or they can be a component */}
            </div>
        )
    }
}

export default ProfileScript;
