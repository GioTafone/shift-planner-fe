import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [shifts, setShifts] = useState(Array(7).fill(Array(22).fill('')));

  const handleShiftChange = (dayIndex, slotIndex, value) => {
    const updatedShifts = [...shifts];
    updatedShifts[dayIndex][slotIndex] = value;
    setShifts(updatedShifts);
  };

  return (
    <div className="App">
      <h1>Shift Planning App</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shiftsByDay, dayIndex) => (
            <tr key={dayIndex}>
              <td>Day {dayIndex + 1}</td>
              <td>
                {shiftsByDay.map((shift, slotIndex) => (
                  <input
                    key={slotIndex}
                    type="text"
                    value={shift}
                    onChange={(e) =>
                      handleShiftChange(dayIndex, slotIndex, e.target.value)
                    }
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;


