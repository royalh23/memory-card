import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <MainContent
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
