import React from 'react';
import Section from './Section.jsx';

import sections from './data.js';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="view">
          <div className="viewItem">Tasks</div>
          <div className="viewItem">Stats</div>
        </div>

        {sections.map((section, i) => <Section section={section} key={i}/>)}
      </div>
    );
  }
}
