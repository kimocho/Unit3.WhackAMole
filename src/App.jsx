import { useGame } from './GameContext.jsx';

const App = () => {
  const startGame = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      <section>
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points!</p>
        <p>How many can you get?</p>
        <button onClick={startGame}>Play</button>
      </section>
      <section>
        <h2>High Scores</h2>
        <ul>
          <li>None yet... Play the game!</li>
        </ul>
      </section>
    </>
  )
}

export default App;
