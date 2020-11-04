import React from 'react';
import ReactDOM from 'react-dom';

import Subticket from './Subticket.jsx';
import OutsideAlert from './OutsideAlert.jsx';

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

      <div className="flex">
        <div className="ticketName btn" onClick={() => this.toggleTicket()}>{this.props.ticket.name}</div>
        <div className="addSubTicket btn"><OutsideAlert><img src="add.png" height={35}/></OutsideAlert></div>
      </div>

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
