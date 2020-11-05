import React from 'react';

const AddTrails = () => {
  let [location, setLocation] = useState('')
  const getAddTrails = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/getTrails/populateDB?location=${location}&keyword=lake`, {
      "method": "get"
    })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className='content'>
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
    </div>
  )
}

export default AddTrails;