import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <div className="nav-bar-2">
      <NavLink to='/'>Home</NavLink>  
      <NavLink to='/trails'>Trails</NavLink> 
      <NavLink to='/forecast'>Forecast</NavLink>
    </div>
  );
}

export default Navigation;