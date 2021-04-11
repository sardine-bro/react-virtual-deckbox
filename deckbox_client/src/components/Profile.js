import React, { Component } from 'react';
import { getUser } from '../redux/actions/userActions'
import { connect } from 'react-redux'

class Profile extends Component {
   
    componentDidMount() {
        // console.log(this.props)
        this.props.getUser()
    }
    render() {

        console.log(this.props.user)
        return (
            <div id="profile">
                {this.props.user.name ? <h1>{this.props.user.name}'s Profile</h1> : <h1 id="loading">Beep Boop Fetching Your Profile...</h1>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    const {user, deckBoxes} = state
    return {
        user, deckBoxes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);