import React from 'react';
import Section from './Section.jsx';

import sections from './data.js';
import Pomodoro from './Pomodoro.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="view">
          <div className="viewItem btn">Tickets</div>
          <div className="viewItem btn">Statistics</div>
        </div>

        <div className="sectionsContainer">
          {sections.map((section, i) => <Section section={section} key={i}/>)}
        </div>

        <div className="pomodoroBox">
          <Pomodoro />
        </div>
      </div>
    );
  }
}
