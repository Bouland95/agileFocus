import React from 'react';
import ReactDOM from 'react-dom';

const Pomodoro = () => {

  return (
    <div className="pomodoroContainer">
      <h2>Timelog</h2>
      <div className="pomodoroOutline">
        <div className="pomodoroCircle"> 30:00</div>
      </div>
      <div className="adjustTimer">
        <div className="minus btn">-</div> <div className="plus btn">+</div>
      </div>
      <div className="activeTicketHeader">Active Ticket</div>
        <div className="activeSubTicket">
          <span className="activeSubTicketText">Add a new ticket or sub-ticket</span>
        </div>
    </div>
  )
}

export default Pomodoro
