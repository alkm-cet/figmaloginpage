import React from 'react'
import Loginbuttons from './Loginbuttons';

function Login() {
    return (
        <div className='logincontainer'>
            <span className="yourlogo">Your Logo</span>
            <span className="loginheader">Login</span>
            <span className="email">Email</span>
            <input className='emailinput' type="text" placeholder='username@gmail.com' />
            <span className="password">Password</span>
            <input className='passwordinput' type="password" placeholder='Password' />
            <a href="#"><span className='forgotpassword'>Forgot Password?</span></a>
            <button className='signin'>Sign in</button>
            <span className='orcontinue'>or continue with</span>
            <Loginbuttons />
            <span className='registerforfree'>Don't have an account yet? <a href="#" style={{textDecoration:'none', color:'black'}}><b>Register for free</b></a></span>
        </div>
    )
}

export default Login