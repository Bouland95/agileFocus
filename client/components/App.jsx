import React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="view">
          <div className="viewItem">Tasks</div>
          <div className="viewItem">Graphs</div>
        </div>

        <div className="projectsContainer">
          <div className="project">
            <div className="projectTitle">Project 1</div>
              <div className="task">
                some task to be completed
                <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
                <span className="completeBtn">Complete</span>
              </div>
              <div className="task">another task about something
              <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
              <span className="completeBtn">Complete</span>
            </div>
            <div className="projectTitle">Project 2</div>
              <div className="task">
                some task to be completed
                <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
                <span className="completeBtn">Complete</span>
              </div>
              <div className="task">another task about something
              <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
              <span className="completeBtn">Complete</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
