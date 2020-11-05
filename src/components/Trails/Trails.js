import React, { useState } from 'react';
import Trail from './Trails'

const Trails = () => {
  let [trailResponseObj, setTrailResponseObj] = useState({})
  const getTrails = () => {
    fetch("http://localhost:4000/trails", {
      "method":"GET"
    })
    .then(response => response.json())
    .then(response => {
      setTrailResponseObj(response.results)
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  return (
    <div className='content'>
      <h2>Trails in DB</h2>
      <button onClick={getTrails}>GetTrails</button>
      <Trail
        trailResponse={trailResponseObj}
      />
    </div>
  )
}

export default Trails