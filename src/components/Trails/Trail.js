import React from 'react';

const trail = (props) => {
  return (
    <div>
    {console.log(props.responseObj)}
      {props.responseObj ?
        <div>
          <p>dog</p>
        </div>
        : null
      }
    </div>
  )
}

export default trail;