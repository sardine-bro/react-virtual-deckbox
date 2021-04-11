import React, { Component } from 'react';
import { profileRequest } from '../services/api'

class Profile extends Component {
    state = {
        username: '',
        deckBoxes: []
    }

    componentDidMount() {
        profileRequest()
        .then(res => {
            if (!res.error) {
                this.setState({ username: res.username, deckBoxes: res.deckboxes})
            }
        })
    }
    render() {
        return (
            <div id="profile">
                {this.state.username ? <h1>{this.state.username}'s Profile</h1> : <h1>Loading...</h1>}
            </div>
        )
    }
}

export default Profile;