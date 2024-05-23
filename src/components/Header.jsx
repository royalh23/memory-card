import '../styles/Header.css';

export default function Header({ score, bestScore }) {
  return (
    <header>
      <div>
        <h1>Memory Card Game</h1>
        <div>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      <p className="instruction">
        Get points by clicking on a card but don&apos;t click on any more than
        once!
      </p>
    </header>
  );
}
