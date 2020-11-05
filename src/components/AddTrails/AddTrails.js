import React, { useState } from 'react';

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
    </div>
  )
}

export default AddTrails;

// import React, { useState } from 'react';
// import Trail from './Trail'

// const Trails = () => {
//   let [trailResponseObj, setTrailResponseObj] = useState({})
//   const getTrails = () => {
//     fetch("http://localhost:4000/trails", {
//       "method": "GET"
//     })
//       .then(response => response.json())
//       .then(response => {
//         setTrailResponseObj(response.results)
//       })
//       .catch(err => {
//         console.log(err)
//       });
//   }

//   return (
//     <div className='content'>
//       <h2>Trails in DB</h2>
//       <button onClick={getTrails}>GetTrails</button>
//       <Trail
//         trailResponse={trailResponseObj}
//       />


//     </div>
//   )
// }

// export default Trails

// export default class TrailsList extends React.Component{
//   state={
//     trails: []
//   }
//   componentDidMount() {
//     axios.get(`http://localhost:4000/trails`)
//       .then(res => {
//         const trails = res.data;
//         this.setState({ trails });
//       })
//   }
//   render() {
//     return (
//       <ul>
//         { this.state.trails.map(trail => <li>{trail.name}</li>)}
//       </ul>
//     )
//   }
// }