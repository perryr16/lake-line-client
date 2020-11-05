import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <div>
      <p><NavLink to='/forecast'>Forecast</NavLink> <NavLink to='/trails'>Trails</NavLink></p>
    </div>
  );
}

export default Navigation;