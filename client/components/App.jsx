import React from 'react';
import Section from './Section.jsx';

import data from './data.js';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="view">
          <div className="viewItem">Tasks</div>
          <div className="viewItem">Stats</div>
        </div>

        <Section sectionName={data[0].name} />
      </div>
    );
  }
}
