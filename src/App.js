import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };
  customEvent = () =>{
    const startHour = Math.random()*12
    const newEv = {
      start: new Date(2019, 8, 20, startHour),
      end:  new Date(2019, 8, 20, startHour + 2),
      title: "Custom Event yay"
    }
    this.setState({events: [...this.state.events, newEv]})
    console.log(this.state.events)
  }

  render() {
    return (
      <div className="App">
        <button onClick={()=> this.customEvent()}>Add Event</button>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
