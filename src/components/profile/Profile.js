import React, { Component } from "react";
import "../profile/Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        
        <div className="profile-header">
          <img className="profile-picture" src="https://cdn.filestackcontent.com/TIJRLGvSIy1W6o2VeYCJ" alt="profile pic" />
          <h1>Ryan Nguyen</h1>
          <h3>iOS Developer</h3>
        </div>
        <div className="profile-content">
          <h2>Bio</h2>
          <p>Ryan Nguyen grew up in a town on the east side of Los Angeles. Ryan started to learn the basics of programming through websites like Code Academy and Team Treehouse. He is at Make School to further develop his professional and development skills. By branching out to his fellow instructors and peers he aspires to develop himself as a great candidate in the tech industry. He is currently undergoing his final year at school and looking for a role in iOS Development</p>
          <h2>Scripts</h2>
          <h4>Script #1</h4>
          <h4>Script #2</h4>
          <h4>Script #3</h4>
        </div>
      </div>
    );
  }
}

export default Profile;
