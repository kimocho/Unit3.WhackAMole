import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState([]);
  const [count, setCount] = useState(0);
  const startGame = () => {
    setGame([<li key={game} className="hole"></li>]);
  }
  const scoreIncrease = () => {
    setCount(count + 1);
  }
  const value = { count, game, scoreIncrease, startGame };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw Error('useGame must be used within a GameContext Provider');
  }

  return context;
}