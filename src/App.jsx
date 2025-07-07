// import { useGame } from './GameContext.jsx';
// import HighScores from './HighScores.jsx';
import { useState } from 'react';

const App = () => {
  const [bool, setBool] = useState(true);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [highScore, setHighScore] = useState([]);
  const [randomMole, setRandomMole] = useState(Math.floor(Math.random() * 9) + 1);
  // const { startGame } = useGame();
  // console.log(startGame);
  return (
    <>
      <h1>Whack a Mole</h1>
      {
        bool ?
          <section>
            <p>Welcome to Whack a Mole!</p>
            <p>Whack a mole to earn points!</p>
            <p>How many can you get?</p>
            <button onClick={() => setBool(false)}>Play</button>
            <h1>High Scores</h1>
            <p>None yet... Play the game!</p>
          </section>
          :
          <section>
            <nav>
              <p className="score">Score: {score}</p>
              <p className="score">Time: {time}</p>
              <button id="restart" onClick={() => setBool(true)}>Restart</button>
            </nav>
            <ul>
              <li className="hole"></li>
              <li className="hole mole"></li>
              <li className="hole"></li>
              <li className="hole"></li>
              <li className="hole"></li>
              <li className="hole"></li>
              <li className="hole"></li>
              <li className="hole"></li>
              <li className="hole"></li>
            </ul>
          </section >
      }

      {/* <HighScores /> */}
    </>
  )
}

export default App;
