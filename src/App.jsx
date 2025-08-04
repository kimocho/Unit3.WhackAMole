import { useState, useRef, useEffect } from 'react';

const App = () => {
  const [bool, setBool] = useState(true);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [highScore, setHighScore] = useState([]);
  const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const randomIndex = Math.floor(Math.random() * 9);
  const arrayToBeMapped = highScore.sort((a, b) => b - a).slice(0, 5);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(time => {
        if (time < 1) {
          clearInterval(intervalRef.current);
          setBool(true);
          return 0;
        }
        return time - 1;
      })
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [bool]);

  return (
    <>
      <h1>Whack a Mole</h1>
      {
        bool ?
          <section>
            <p>Welcome to Whack a Mole!</p>
            <p>Whack a mole to earn points!</p>
            <p>How many can you get?</p>
            <button onClick={() => { setScore(0); setBool(false); setTime(15); }}>Play</button>
            <h1>High Scores</h1>
            {highScore.length ?
              <>
                {arrayToBeMapped.map((elem, index) => <p key={index}>{elem}</p>)}
              </>
              :
              <p>None yet... Play the game!</p>
            }
          </section>
          :
          <section>
            <nav>
              <p className="score">Score: {score}</p>
              <p className="score">Time: {time}</p>
              <button id="restart" onClick={() => {
                setBool(true);
                setHighScore([...highScore, score]);
              }}>Restart</button>
            </nav>
            <ul>
              {
                items.map((item, index) => (
                  <li key={index} className={index === randomIndex ? 'hole mole' : 'hole'} onClick={index === randomIndex ? () => setScore(score + 1) : null}></li>
                ))
              }
            </ul>
          </section >
      }
    </>
  )
}

export default App;