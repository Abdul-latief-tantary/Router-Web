

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dshboard.css'; 

function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Teachers Dashboard</h1>
      <div className='card-container'>
        <NavLink to="/Science" className='card'>
          <h2>Science</h2>
          <p>Access science learning material</p>
        </NavLink>
        
        <NavLink to="/Math" className='card'>
          <h2>Math</h2>
          <p>Access Math learning material</p>
        </NavLink>
        
        <NavLink to="/English" className='card'>
          <h2>English</h2>
          <p>Access English learning material</p>
        </NavLink>
        
        <NavLink to="/History" className='card'>
          <h2>History</h2>
          <p>Access History learning material</p>
        </NavLink>
      </div>
      <div className='output'>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
