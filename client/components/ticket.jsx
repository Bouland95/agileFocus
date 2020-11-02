import React from 'react';
import ReactDOM from 'react-dom';

import Subticket from './Subticket.jsx';

const Ticket = ({ticket, sectionName}) => {
  return (
    <div className="ticket">

      <div className="ticketName">{ticket.name}</div>

      {ticket.active ? ticket.subTickets.map((subticket, i) => <Subticket subticket={subticket} sectionName={sectionName} key={i}/>) : ''}

    </div>
  )
}

export default Ticket