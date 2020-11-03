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

  pushTicket(sectionName, subticket) {
    // debugger;
    var sections = this.state.sections;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].name === sectionName) {
        // debugger;
        var pushedTicket = sections[i]
        var sectionsState = this.state.sections;
        debugger;
        delete sectionsState[i][subticket]
      }
    }
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
