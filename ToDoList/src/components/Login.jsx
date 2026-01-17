import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  return (
    <>
    
    <div className="container">

        <div class="card">
            <h2 id="form-head">Login</h2>
            <form>

           
                <div className="form-div">
                    <label for="username">Username</label>
                    <input type="text" className="input-box" name="username" id="" placeholder="Enter your username."/>
                </div>
                <br/>
                <div className="form-div">
                    <label for="password">Password</label>
                    <input type="password" className="input-box" name="password" placeholder="Enter password"/>
                </div>
                <br/>    
                <button type="submit" id="form-submit">Submit</button>
                <div>
                <a className="form-anchor" href="">Forgot Password?</a>
                <p>New user?    <Link className="form-anchor" to='/Register'>Sign Up</Link></p>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login;
