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

      {/* Uncomment to remove empty tickets */}
      {/* {this.props.ticket.subTickets.length === 0
      ? ''
      :  */}
      <div className="ticketName btn" onClick={() => this.toggleTicket()}>{this.props.ticket.name}</div>

      {this.state.active

      ? this.props.ticket.subTickets.map((subticket, i) =>
      <Subticket ticketId={this.props.ticketId} subticket={subticket}
      sectionName={this.props.sectionName} pushTicket={this.props.pushTicket}
      setTrackedTicket={this.props.setTrackedTicket} key={i}/>)

      : ''}

    </div>
    )
  }
}

export default Ticket
