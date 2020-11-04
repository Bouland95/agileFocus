import React from 'react';
import ReactDOM from 'react-dom';

const Subticket = ({subticket, sectionName, pushTicket, ticketId, setTrackedTicket}) => {
  return (
    <div className="subTicket">
      {subticket.name}
      {(sectionName === 'In-Progress') ? <img onClick={() => setTrackedTicket(subticket)} className="btn" src="./play--v1.png" height="20"/> : ''}
      <span className="pushBtn btn" onClick={()=> pushTicket(sectionName,ticketId , subticket)}>{sectionName === 'Complete' ? 'X' : 'Push'}</span>
    </div>
  )
}

export default Subticket
