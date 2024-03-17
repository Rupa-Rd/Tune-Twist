import React from 'react'
import logo from '../images/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navigation-bar'>
        <div className='row'>
            <img src={logo} alt='App-Logo'/>
            <h3>Tune Twist</h3>
        </div>
        <div className='page'>
            <li>About</li>
            <li>How it works</li>
            <li>Help</li>
        </div>
        <div className='profile'>
            <button className='sign-up'>SignUp</button>
            <button className='login'>LogIn</button>
        </div>     
    </div>
  )
}

export default Navbar
