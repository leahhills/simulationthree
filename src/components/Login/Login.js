import React, {Component} from 'react';
import loginLogo from './../../pictures/loginlogo.png';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="main_background">

                <section className="login_box">
                    <div className="logo"><img src={ loginLogo } alt="blinking smileyface"/></div>
                    <div className="helo">Helo</div>
                    <a href={ process.env.REACT_APP_LOGIN }>
                        <button className="login_button">Login/Register</button>
                    </a>
                </section>
            </div>
        )
    }
}
