import React from 'react';
import ReactDOM from 'react-dom';

const Subticket = ({subticket, sectionName}) => {
  return (
    <div className="subTicket">
      {subticket.name}
      {(sectionName === 'In-Progress') ? <img className="btn" src="./play--v1.png" height="20"/> : ''}
      <span className="pushBtn btn">Push</span>
    </div>
  )
}

export default Subticket