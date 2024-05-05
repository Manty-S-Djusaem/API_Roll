import React, { useState, useContext } from 'react';
import axios from 'axios';
import { DiceHistoryContext } from './DiceHistoryContext';
import './App.css';
import { Link } from 'react-router-dom';

const DicePage = ({ sides, diceName }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const { addHistory, history } = useContext(DiceHistoryContext);

  const rollDice = () => {
    axios
      .get(`http://localhost:3000/roll/${sides}`)
      .then((response) => {
        const diceResult = response.data.result;
        setResult(diceResult);
        addHistory(diceName, diceResult);
        setError(null);
      })
      .catch((error) => {
        console.error('Ошибка при запросе к API:', error);
        setError('Произошла ошибка при броске. Пожалуйста, попробуйте снова.');
      });
  };

  return (
    <div>
      <h2>Бросок кубика {diceName}</h2>
      <button onClick={rollDice} className="button">Бросить</button>
      
      {error && <p className="error-text">{error}</p>}
      {result !== null && <p>Результат: {result}</p>}

      <h3>История бросков:</h3>
      <ul>
        {history.slice(-10).map((entry, index) => (
          <li key={index}>{entry.diceName}: - {entry.result}</li>
        ))}
      </ul>

      <Link to="/" className="button">Вернуться назад</Link>
    </div>
  );
};

export default DicePage;
