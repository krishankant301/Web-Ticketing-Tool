import React from 'react'
import {Form, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">SignIn</Link>
    </nav>
  )
}

export default Navbar
