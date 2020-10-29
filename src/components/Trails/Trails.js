import React, { useState} from 'react';
import axios from 'axios';

const Trails = () => {
  let [responseObj, setREsponseObj] = useState({})
  const getTrails = () => {
    fetch("http://localhost:4000/trails", {
      "method":"GET"
    })
    .then(response => response.json())
    .then(response => {
      setREsponseObj(response)
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  return (
    <div class="">
      <h2>Trails in DB</h2>
      <button onClick={getTrails}>GetTrails</button>
      {/* <button onClick={axiosTrails}>GetTrails</button> */}
      <div class="allTrails">
        {/* {JSON.stringify(allTrails)} */}
        {/* {JSON.stringify(responseObj.results[0])} */}
        {/* {responseObj.results} */}
        {/* {responseObj.results.map(trail => <li>{trail.name}</li>)} */}
        {/* {JSON.stringify(responseObj.results.map(trail => <li>{trail.name}</li>))} */}
      </div>
    </div>
  )
}

// export default Trails

export default class TrailsList extends React.Component{
  state={
    trails: []
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/trails`)
      .then(res => {
        const trails = res.data;
        this.setState({ trails });
      })
  }
  render() {
    return (
      <ul>
        { this.state.trails.map(trail => <li>{trail.name}</li>)}
      </ul>
    )
  }
}