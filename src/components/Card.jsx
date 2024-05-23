import { useState } from 'react';
import '../styles/Card.css';

export default function Card({ name, src, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="card" onClick={() => onClick(isClicked, setIsClicked)}>
      <img src={src} alt="Pokemon image" />
      <h2>{name}</h2>
    </div>
  );
}
