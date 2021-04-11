import React, { Component } from 'react';
import { authRequest } from '../services/api'

class Login extends Component {
    state = {
        username: '',
        password: '', 
        message: ''  
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state
        authRequest({username, password}).then(console.log)

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div>
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

export default Login;

