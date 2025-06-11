import { createContext, useContext, useState } from 'react';
import hole from '../public/hole.png';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState([]);
  const startGame = () => {
    setGame([hole, hole, hole,
      hole, hole, hole,
      hole, hole, hole]);
  }
  const scoreIncrease = (count) => {
    return count + 1;
  }
  const value = { game, scoreIncrease, startGame };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw Error('useGame must be used within a GameContext Provider');
  }

  return context;
}