import React from 'react';
import ReactDOM from 'react-dom';

import Ticket from './Ticket.jsx';

const Section = ({section}) => {
  return (
    <div className="section">

        <h2>{section.name}</h2>

        {section.tickets.map((ticket, i) => <Ticket ticket={ticket} key={i}/>)}

    </div>
  )
}

export default Section