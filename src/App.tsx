import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function App() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: ''
        }}
        viewDidMount={(arg) => {
          // You can hook in here and render whatever content you want to the calendar view.
          // For some reason it fires twice???  Fullcalendar is sometimes janky.
          let test = document.getElementById('hiya-test');
          if (!test) {
            const x = document.getElementsByClassName("fc-header-toolbar");
            const y = x[0];
            const z = document.createElement('span');
            z.setAttribute('id', 'hiya-test');
            z.innerText = 'hiya';
            y.append(z);
          }
        }}
      />
    </div>
  );
}

export default App;
