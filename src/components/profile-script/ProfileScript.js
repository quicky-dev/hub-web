import React, { Component } from "react";
import "../profile-script/ProfileScript.css";

class ProfileScript extends Component {
    render() {
        return (
            <div className="script">
                <h4><a href="/script/girugamesh-1">{this.props.name}</a></h4>
                <h4>{this.props.date}</h4>
                {/* tags can go here and be css styled */}
                {/* or they can be a component */}
            </div>
        )
    }
}

export default ProfileScript;
