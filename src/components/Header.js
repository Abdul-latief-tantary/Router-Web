import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    
    <nav className='navbar'>
      <ul>
       <li><NavLink to='/'> Home</NavLink></li>
        <li><NavLink to='/Dshboard'>Dashboard</NavLink></li>
        <li><NavLink to='/Login'>Login</NavLink></li>
        <li><NavLink to='/Signup'>Signup</NavLink></li>
      </ul>
      </nav>
      
   
    
  );
}

export default Header;
