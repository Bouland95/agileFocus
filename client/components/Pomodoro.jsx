import React from 'react';
import ReactDOM from 'react-dom';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      time: 1800
    }
  }

  toggleTime() {
    if (!this.state.active) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        var newTime = this.state.time - 1;

        this.setState({
          time: newTime,
          active: true
        })
      }, 1000)
    } else {
      clearInterval(this.timer);
      this.setState({
        active: false
      })
    }
  }

  plusTime() {
    var newTime = this.state.time + 60;
    this.setState({
      time: newTime
    })
  }

  minusTime() {
    var newTime = this.state.time - 60;
    this.setState({
      time: newTime
    })
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

  renderSettings() {
    if (this.state.active) {
      return (
      <div className="emptyAdjusterDiv">
        <div className="pomodoroSettings">
          <img className="btn" src="./stop.png" height="40"/> <img className="btn" src="./pause.png" height="40" onClick={() => this.toggleTime()}/>
        </div>
      </div>)
    } else {
      return (
        <div className="emptyAdjusterDiv">
      <div className="pomodoroSettings normalCursor">
        <div className="minus btn" onClick={() => this.minusTime()}>-</div>

          <img className="btn" src="./stop.png" height="40"/> <img className="btn" src="./play.png" height="40" onClick={() => this.toggleTime()}/>

        <div className="plus btn" onClick={() => this.plusTime()}>+</div>
        </div>
      </div>)
    }
  }

  render() {
    return (
      <div className="pomodoroContainer">
        <h2>Timelog</h2>
        <div className="pomodoroOutline">
          <div className="pomodoroCircle btn">{this.timeFormatter(this.state.time)}</div>
        </div>
        {this.renderSettings()}
        <div className="activeTicketHeader">Active Ticket</div>
          <div className="activeSubTicket">
            <span className="activeSubTicketText">Add a new ticket or sub-ticket</span>
          </div>
      </div>
    )
  }
}

export default Pomodoro
