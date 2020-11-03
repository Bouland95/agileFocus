import React from 'react';
import Section from './Section.jsx';

import sections from './data.js';
import Pomodoro from './Pomodoro.jsx';

var sectionsNames = ['Backlog', 'In-Progress', 'Complete'];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: sections
    }
  }

  pushTicket(sectionName, ticketId, pushedSubticket) {
    // debugger;
    var currentSectionIndex = sectionsNames.indexOf(sectionName);

    var sections = this.state.sections;
    var currentSectionTickets = sections[sectionName];
    var ticket = currentSectionTickets[ticketId];
    var subtickets = ticket.subTickets;

    // removes the ticket from the current section
    for (var i = 0; i < subtickets.length; i++) {
      var subticket = subtickets[i];
      if (subticket.name === pushedSubticket.name) {
        subtickets.splice(i,1);
      }
    }

    // if a next session exists
    if (sectionsNames[currentSectionIndex + 1] !== undefined) {
      // debugger;
      var nextSection = sections[sectionsNames[currentSectionIndex + 1]];

      // if the ticket does not exist, create it
      if (nextSection[ticketId] === undefined) {
        nextSection[ticketId] = {
          name: ticket.name,
          subTickets: []
        }
      }
      nextSection[ticketId].subTickets.push(pushedSubticket);
    }

    this.setState({
      sections: sections
    })
  }


  render() {
    return (
      <div>
        <div className="view">
          <div className="viewItem btn">Tickets</div>
          <div className="viewItem btn">Statistics</div>
        </div>

        <div className="sectionsContainer">
          {Object.keys(this.state.sections).map((section, i) => <Section sectionName={section}
          sectionTickets={this.state.sections[section]} pushTicket={this.pushTicket.bind(this)} key={i}/>)}
        </div>

        <div className="pomodoroBox">
          <Pomodoro />
        </div>
      </div>
    );
  }
}
