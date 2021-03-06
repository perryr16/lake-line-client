import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <div className="nav-bar">
      <NavLink to='/'>Home</NavLink>  
      <NavLink to='/forecast'>Forecast</NavLink>
      <NavLink to='/trails'>Trails</NavLink> 
      <NavLink to='/addTrails'>Add Trails</NavLink>
      <NavLink to='/news'>News</NavLink>
      <NavLink to='/snow'>Snow</NavLink>
    </div>
  );
}

export default Navigation;