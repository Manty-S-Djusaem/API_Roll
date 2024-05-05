import React, { createContext, useState } from 'react';

const DiceHistoryContext = createContext();

const DiceHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addHistory = (diceName, result) => {
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, { diceName, result }];

      if (newHistory.length > 10) {
        newHistory.shift();
      }

      return newHistory;
    });
  };

  return (
    <DiceHistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </DiceHistoryContext.Provider>
  );
};

export { DiceHistoryContext, DiceHistoryProvider };
