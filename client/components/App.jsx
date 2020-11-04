import React from 'react';
import _ from 'lodash';
import Section from './Section.jsx';

import sections from './data.js';
import Pomodoro from './Pomodoro.jsx';

var sectionsNames = ['Backlog', 'In-Progress', 'Complete'];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Tickets',
      sections: sections,
      activeTicket: 'Select an "In-Progress" ticket',
      activeTimer: false,
      time: 1800,
      newTicket: ''
    }
  }

  handleViewChange(e) {
    this.setState({
      view: e.target.innerText
    })
  }

  handleNewTicketChange(event) {
    this.setState({
      newTicket: event.target.value
    })
  }

  handleNewTicketSubmit(event) {
    event.preventDefault();
    const { newTicket, sections } = this.state;
    sections.Backlog[_.uniqueId()] = {
      name: newTicket,
      subTickets: []
    }
    this.setState({
      sections: sections,
      newTicket: ''
    })
  }

  pushTicket(sectionName, ticketId, pushedSubticket) {
    var currentSectionIndex = sectionsNames.indexOf(sectionName);

    var sections = this.state.sections;
    var currentSectionTickets = sections[sectionName];
    var ticket = currentSectionTickets[ticketId];
    var subtickets = ticket.subTickets;

    // removes the ticket from the current section
    for (var i = 0; i < subtickets.length; i++) {
      var subticket = subtickets[i];
      if (subticket.name === pushedSubticket.name) {
        subtickets.splice(i, 1);
      }
      if (subtickets.length === 0) {
        delete currentSectionTickets[ticketId]
      }
    }

    // if a next session exists
    if (sectionsNames[currentSectionIndex + 1] !== undefined) {
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

  setTrackedTicket(subticket) {
    if (!this.state.activeTimer) {
      this.toggleTime();
    }
    this.setState({
      activeTicket: subticket.name
    })
  }

  toggleTime() {
    if (!this.state.activeTimer) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        var newTime = this.state.time - 1;

        this.setState({
          time: newTime,
          activeTimer: true
        })
      }, 1000)
    } else {
      clearInterval(this.timer);
      this.setState({
        activeTimer: false
      })
    }
  }

  plusTime() {
    var newTime = this.state.time + 60;
    this.setState({
      time: newTime
    })
  }

  minusTime() {
    var newTime = this.state.time - 60;
    this.setState({
      time: newTime
    })
  }

  render() {
    if (this.state.view === 'Tickets') {
      return (
        <div>
          <div className="view" onClick={this.handleViewChange.bind(this)}>
            <div className="viewItem btn">Tickets</div>
            <div className="viewItem btn">Statistics</div>
          </div>

          <div className="sectionsContainer">
            {Object.keys(this.state.sections).map((section, i) =>
            <Section sectionName={section} sectionTickets={this.state.sections[section]}
            pushTicket={this.pushTicket.bind(this)} setTrackedTicket={this.setTrackedTicket.bind(this)}
            newTicket={this.state.newTicket} handleNewTicketChange={this.handleNewTicketChange.bind(this)}
            handleNewTicketSubmit={this.handleNewTicketSubmit.bind(this)} key={i}/>)}
          </div>

          <div className="pomodoroBox">
            <Pomodoro activeTicket={this.state.activeTicket} toggleTime={this.toggleTime.bind(this)}
            active={this.state.activeTimer} time={this.state.time} plusTime={this.plusTime.bind(this)}
            minusTime={this.minusTime.bind(this)}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div className="view" onClick={this.handleViewChange.bind(this)}>
              <div className="viewItem btn">Tickets</div>
              <div className="viewItem btn">Statistics</div>
          </div>
        </div>
      )
    }
  }
}
