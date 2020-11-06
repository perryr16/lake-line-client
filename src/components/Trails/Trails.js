import React, { useState } from 'react';
import Trail from './Trail'

const Trails = () => {
  let [trailResponseObj, setTrailResponseObj] = useState({})
  let [location, setLocation] = useState('')
  const getTrails = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/trails?location=${location}`, {
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
      <h2>Search Trails in DB</h2>
      <p>Leave Search blank to return all trails</p>
      <form onSubmit={getTrails}>
        <label>
          <input
            type="text"
            placeholder="(OPTIONAL) Enter Location or State"
            maxLength="300"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <input type='submit' value='Search Trails' />
      </form>
      {/* <button onClick={getTrails}>GetTrails</button> */}
      <Trail
        trailResponse={trailResponseObj}
      />
    </div>
  )
}

export default Trails