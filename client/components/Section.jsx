import React from 'react';
import ReactDOM from 'react-dom';

const Section = ({sectionName}) => {
  return (
    <div className="section">
        <h2>{sectionName}</h2>

        <div className="ticket">

          <div className="ticketName">Implement a new user interface</div>

          <div className="minorTicket">
            Add drop down menus for project selection
            <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
            <span className="pushBtn">Push</span>
          </div>

          <div className="minorTicket">
            Make it possible to add sub ticket
            <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
            <span className="pushBtn">Push</span>
          </div>

          <div className="minorTicket">
            Allow creation of new tickets
            <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png" height="20"/>
            <span className="pushBtn">Push</span>
          </div>

        </div>
    </div>
  )
}

export default Section