import React from 'react';
import ReactDOM from 'react-dom';

import Ticket from './Ticket.jsx';

const Section = ({sectionName, sectionTickets, pushTicket, setTrackedTicket}) => {
  return (
    <div className="section">

      <div className="sectionHeader">
        <h2>{sectionName}</h2>
        {sectionName === 'Backlog' ? <input className="newTicket" placeholder={"Enter a new ticket..."}/> : ''}
      </div>

      {Object.keys(sectionTickets).length === 0

      ? <div className=" empty">Empty</div>

      : Object.keys(sectionTickets).map((id, i) =>
      <Ticket ticketId={id} ticket={sectionTickets[id]} sectionName={sectionName}
      pushTicket={pushTicket} setTrackedTicket={setTrackedTicket} key={i}/>)}

    </div>
  )
}

export default Section
