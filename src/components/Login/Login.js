import React, { Component } from 'react';
import loginlogo from './../../loginlogo.png';
import './Login.css';

class Login extends Component{
    render(){
        return(
            <div>
                <img src={ loginlogo } alt="blinking smileyface" />
                <a href={ process.env.REACT_APP_LOGIN }><button type ="" classname ="">Login/Register</button></a>
            </div>
        )
    }
}
export default Login;
