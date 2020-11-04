import React from 'react';
import ReactDOM from 'react-dom';

import Ticket from './Ticket.jsx';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  enterNewTicket(e, handleNewTicketSubmit) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      handleNewTicketSubmit(e)
    }
  }

  render() {

    const {sectionName, sectionTickets, pushTicket, setTrackedTicket,
      newTicket, handleNewTicketChange, handleNewTicketSubmit} = this.props;


    return (
      <div className="section">

        <div className="sectionHeader">
          <h2>{sectionName}</h2>
          {sectionName === 'Backlog' ? <input className="newTicket" placeholder={"Enter a new ticket..."}
          value={newTicket} onChange={handleNewTicketChange} onKeyDown={(e) => this.enterNewTicket(e, handleNewTicketSubmit)}/> : ''}
        </div>

        {/* Uncomment to remove empty tickets */}
        {Object.keys(sectionTickets).length === 0

        ? <div className=" empty">Empty</div>

        :
        Object.keys(sectionTickets).map((id, i) =>
        <Ticket ticketId={id} ticket={sectionTickets[id]} sectionName={sectionName}
        pushTicket={pushTicket} setTrackedTicket={setTrackedTicket} key={i}/>)}

      </div>
    )

  }
}


export default Section
