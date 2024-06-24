import React, { useState } from 'react';
import './App.css';
import AddBooking from './AddBooking';
import BookingsList from './BookingsList';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2024);

  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (direction) => {
    if (direction === -1 && currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (direction === 1 && currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + direction);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="logo-container">
          <img src="2.png" alt="Logo" />
        </div>
      </header>
      <div className="calendar-container">
        <div className="nav-button-container">
          <button className="nav-button" onClick={() => handleMonthChange(-1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="month-name">{months[currentMonth].name} {currentYear}</div>
          <button className="nav-button" onClick={() => handleMonthChange(1)}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <table className="calendar">
          <tbody>
            {Array(Math.ceil(months[currentMonth].days / 7)).fill(0).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array(7).fill(0).map((_, colIndex) => (
                  <td key={colIndex} onClick={() => handleDateClick(rowIndex * 7 + colIndex + 1)}>
                    {rowIndex * 7 + colIndex + 1 <= months[currentMonth].days ? rowIndex * 7 + colIndex + 1 : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedDate && (
        <div>
          <h2>You selected: {selectedDate}</h2>
          <p>
            <a href={`/date/${selectedDate}`}>View details</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
