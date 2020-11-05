import React, { useState } from 'react';
import AddTrails from '../AddTrails/AddTrails'
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