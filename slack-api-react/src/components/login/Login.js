import React from 'react'
import './Login.css'
import logo from '../../assets/login/logo.svg'
import gLogo from '../../assets/login/g-logo.png'




const Login = () => {
    return (
        <div className="login">
        <div className="login-container">
            <div className="left-container">
                <img className="logo" src={logo}></img>
                <h1 className="logo-text">Consectetur fugiat nulla excepteur qui cillum sunt ad excepteur dolore incididunt ullamco sit nulla.</h1>
                <div className="login-image"></div>
            </div>
            <div className="right-container">
                <div className="signup">
                    <p> Not a member? <a className="signup-link">Sign up now!</a></p>
                </div>
                <div className="login-main">
                    <h1>Sign in to Slack API</h1>
                    <div className="google-login">
                        <img className="g-logo" src = {gLogo}></img>
                        <span className="google-text"><p>Sign in with Google</p></span>
                    </div>
                    <div className="or-line">
                        <p className="or"><span>or</span></p>
                    </div>
                    <form className="login-form">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email..."></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password..."></input>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
