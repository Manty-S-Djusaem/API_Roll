import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DicePage from './DicePage';
import HomePage from './HomePage';
import './App.css'
import { DiceHistoryProvider } from './DiceHistoryContext.jsx';

const DiceRoller = () => {
  const [result, setResult] = useState(null);
  const [sides, setSides] = useState(6);

  const rollDice = () => {
    axios
      .get(`http://localhost:3000/roll/${sides}`)
      .then((response) => {
        setResult(response.data.result);
        console.log(`Результат броска кубика: ${response.data.result}`);
      })
      .catch((error) => {
        console.error('Ошибка при запросе к API:', error);
      });
  };

  return (
    <div>
      <div>
        <h2>Бросок кубика</h2>
      </div>
      <input
        type="number"
        value={sides}
        onChange={(e) => setSides(parseInt(e.target.value, 10))}
        min={1}
      />
      <button onClick={rollDice}>Бросить</button>
      {result !== null && <p>Результат: {result}</p>}
    </div>
  );
};

function App() {
  return (
    <DiceHistoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/d4" element={<DicePage sides={4} diceName="d4" />} />
          <Route path="/d6" element={<DicePage sides={6} diceName="d6" />} />
          <Route path="/d8" element={<DicePage sides={8} diceName="d8" />} />
          <Route path="/d10" element={<DicePage sides={10} diceName="d10" />} />
          <Route path="/d12" element={<DicePage sides={12} diceName="d12" />} />
          <Route path="/d20" element={<DicePage sides={20} diceName="d20" />} />
          <Route path="/d100" element={<DicePage sides={100} diceName="d100" />} />
        </Routes>
      </Router>
    </DiceHistoryProvider>
  );
}

export default App;
