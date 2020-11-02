import React from 'react';
import ReactDOM from 'react-dom';

const Subticket = ({subticket, sectionName}) => {
  return (
    <div className="subTicket">
      {subticket.name}
      {(sectionName === 'IN-PROGRESS') ? <img src="./play--v1.png" height="20"/> : ''}
      <span className="pushBtn">Push</span>
    </div>
  )
}

export default Subticket