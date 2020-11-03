import React from 'react';
import ReactDOM from 'react-dom';

import Subticket from './Subticket.jsx';

class Ticket extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
  }

  toggleTicket() {
    var inverse = !this.state.active;
    this.setState({
      active: inverse
    })
  }

  render() {
    return (
      <div className="ticket">

      <div className="ticketName btn" onClick={() => this.toggleTicket()}>{this.props.ticket.name}</div>

      {this.state.active ? this.props.ticket.subTickets.map((subticket, i) => <Subticket subticket={subticket} sectionName={this.props.sectionName} pushTicket={this.props.pushTicket} key={i}/>) : ''}

    </div>
    )
  }
}

export default Ticket