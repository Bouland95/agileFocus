import React from 'react';
import ReactDOM from 'react-dom';

import Ticket from './Ticket.jsx';

const Section = ({sectionName, sectionTickets, pushTicket}) => {
  return (
    <div className="section">

      <h2>{sectionName}</h2>

      {sectionTickets.map((ticket, i) => <Ticket ticket={ticket} sectionName={sectionName} pushTicket={pushTicket} key={i}/>)}

    </div>
  )
}

export default Section