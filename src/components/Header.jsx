import '../styles/Header.css';

export default function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <div>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
