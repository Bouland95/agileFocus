import React from 'react';
import ReactDOM from 'react-dom';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
  }

  timeFormatter(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = (timeInSeconds - seconds) / 60;
    var formattedSeconds = `${seconds}`;
    var formattedMinutes = `${minutes}`;
    if (seconds < 10) {
      formattedSeconds = '0' + formattedSeconds;
    }
    if (minutes < 10) {
      formattedMinutes = '0' + formattedMinutes;
    }
    return `${formattedMinutes}:${formattedSeconds}`
  }

  // renders pause/stop or resume/stop and (-, + for timer if paused)
  renderSettings() {
    if (this.props.active) {
      return (
      <div className="emptyAdjusterDiv">
        <div className="pomodoroSettings">
          <img className="btn" src="./stop.png" height="40"/> <img className="btn" src="./pause.png" height="40" onClick={() => this.props.toggleTime()}/>
        </div>
      </div>)
    } else {
      return (
        <div className="emptyAdjusterDiv">
      <div className="pomodoroSettings normalCursor">
        <div className="minus btn" onClick={() => this.props.minusTime()}>-</div>

          <img className="btn" src="./stop.png" height="40"/> <img className="btn" src="./play.png" height="40" onClick={() => this.props.toggleTime()}/>

        <div className="plus btn" onClick={() => this.props.plusTime()}>+</div>
        </div>
      </div>)
    }
  }

  render() {
    return (
      <div className="pomodoroContainer">
        <h2>Timelog</h2>
        <div className="pomodoroOutline">
          <div className="pomodoroCircle btn">{this.timeFormatter(this.props.time)}</div>
        </div>
        {this.renderSettings()}
        <div className="activeTicketHeader">Active Ticket</div>
          <div className="activeSubTicket">
    <span className="activeSubTicketText">{this.props.activeTicket}</span>
          </div>
      </div>
    )
  }
}

export default Pomodoro
