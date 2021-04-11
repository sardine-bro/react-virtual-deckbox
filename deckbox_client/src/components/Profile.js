import React, { Component } from 'react';
import { profileRequest } from '../services/api'

class Profile extends Component {
    componentDidMount() {
        profileRequest().then(console.log)
    }
    render() {
        return (
            <div id="profile">
                <h1>Your Profile  </h1>
            </div>
        )
    }
}

export default Profile;