import React, { useState } from 'react';
import './App.css';

function App() {
  const [numberType, setNumberType] = useState('p');
  const [numbersBefore, setNumbersBefore] = useState([]);
  const [numbersAfter, setNumbersAfter] = useState([]);
  const [average, setAverage] = useState(null);

  const fetchNumber = async () => {
    try {
      const response = await fetch(http://localhost:3000/numbers/${numberType});
      if (response.ok) {
        const data = await response.json();
        setNumbersBefore(data.numbers_before);
        setNumbersAfter(data.numbers_after);
        setAverage(data.average);
      } else {
        console.error('Error fetching number:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching number:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <label htmlFor="numberType">Select number type:</label>
      <select id="numberType" value={numberType} onChange={(e) => setNumberType(e.target.value)}>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumber}>Get Number</button>
      <div className="results">
        <h2>Results</h2>
        <p>Numbers before: {numbersBefore.join(', ')}</p>
        <p>Numbers after: {numbersAfter.join(', ')}</p>
        <p>Average: {average !== null ? average : 'N/A'}</p>
      </div>
    </div>
  );
}

export default App;
