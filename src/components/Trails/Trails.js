import React, { useState} from 'react';

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
      <div class="allTrails">
        {JSON.stringify(responseObj)}
      </div>
      <button onClick={getTrails}>GetTrails</button>
    </div>
  )
}

export default Trails