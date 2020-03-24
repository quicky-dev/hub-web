import React, { Component } from 'react';
import '../dashboard/Dashboard.css';

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard">
                    <p>Welcome to the Hub, {this.props.user}</p>
                    <p>Dashboard Coming Soon</p>
            </div>
        );
    }
}

export default Dashboard;