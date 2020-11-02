import React from 'react';
import Section from './Section.jsx';

import sections from './data.js';

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

        <div className="pomodoroContainer">
          <h2>Timelog</h2>
          <div className="pomodoroOutline">
          <div className="pomodoroCircle"> 25:00</div>
          </div>
          <div className="adjustTimer">
            <div className="minus btn">-</div> <div className="plus btn">+</div>
          </div>
        </div>
      </div>
    );
  }
}
