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
          <div className="viewItem">Tickets</div>
          <div className="viewItem">Statistics</div>
        </div>

        <div className="sectionsContainer">
          {sections.map((section, i) => <Section section={section} key={i}/>)}
        </div>
      </div>
    );
  }
}
