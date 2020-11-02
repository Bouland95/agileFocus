import React from 'react';
import ReactDOM from 'react-dom';

import Subticket from './Subticket.jsx';

const Ticket = ({ticket}) => {
  return (
    <div className="ticket">

      <div className="ticketName">{ticket.name}</div>

      {ticket.subTickets.map((subticket, i) => <Subticket subticket={subticket} key={i}/>)}

    </div>
  )
}

export default Ticket