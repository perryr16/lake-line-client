import React, { useState } from 'react';

const AddTrails = (props) => {
  let [location, setLocation] = useState('')
  let [addResponseObj, setAddResponseObj] = useState({})
  const getAddTrails = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/getTrails/populateDB?location=${location}&keyword=lake`, {
      "method": "get"
    })
    .then(response => response.json())
    .then(response => {
      setAddResponseObj(response)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <h2>Add Trails to DB</h2>
      <form onSubmit={getAddTrails}>
        <label>
          <input
            type="text"
            placeholder="Enter Location & State Abbrev"
            maxLength="100"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <input type='submit' value='add trails to db' />
      </form>
      <div>
        {props}
      </div>
    </div>
  )
}

export default AddTrails;