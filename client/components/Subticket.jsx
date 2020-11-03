import React from 'react';
import ReactDOM from 'react-dom';

const Subticket = ({subticket, sectionName, pushTicket, ticketId}) => {
  return (
    <div className="subTicket">
      {subticket.name}
      {(sectionName === 'In-Progress') ? <img className="btn" src="./play--v1.png" height="20"/> : ''}
      <span className="pushBtn btn" onClick={()=> pushTicket(sectionName,ticketId , subticket)}>Push</span>
    </div>
  )
}

export default Subticket