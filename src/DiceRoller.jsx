import React, { useState } from 'react';
import axios from 'axios';

const DiceRoller = () => {
  const [result, setResult] = useState(null);
  const [sides, setSides] = useState(6);

  const rollDice = () => {
    axios
      .get(`http://localhost:3000/roll/${sides}`)
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        console.error('Ошибка при запросе к API:', error);
      });
  };

  return (
    <div>
      <h2>Бросок кубика</h2>
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

export default DiceRoller;
