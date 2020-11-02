import React from 'react';

const trail = (props) => {
  return (
    <div>
    {console.log(props.responseObj[0].name)}
      {props.responseObj ?
        <div>
        <p>{props.responseObj[0].name}</p>
        </div>
        : null
      }
    </div>
  )
}

export default trail;