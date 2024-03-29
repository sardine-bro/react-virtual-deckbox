import React, { Component } from 'react';
import { authRequest } from '../services/api'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        username: '',
        password: '', 
        message: ''  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state
        authRequest({username, password}).then(res => {
            if (res.error) {
                this.setState({message: res.error}) 
            } else {
                localStorage.setItem('jwt', res.jwt)

                this.props.history.push('/profile')
            }
        })

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div>
                {/* <p>{localStorage.getItem('jwt')}</p>   */}
                <form onSubmit={this.handleSubmit}>
                    <p style={{color: 'red'}}>{this.state.message}</p>

                    <input type='text' name='username' value={this.state.username}onChange={this.handleChange} value={this.state.username} />

                    <input type='password' name='password' value={this.state.password}onChange={this.handleChange} value={this.state.password} /> 

                    <input type='submit' value="Login" />
                </form>

            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: dispatch({type: 'SET_USER', payload: user})
    }
}

export default connect(null, mapDispatchToProps)(Login);

