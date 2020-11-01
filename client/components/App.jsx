import React from 'react';
import Section from './Section.jsx';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="view">
          <div className="viewItem">Tasks</div>
          <div className="viewItem">Stats</div>
        </div>

        <Section />
      </div>
    );
  }
}
