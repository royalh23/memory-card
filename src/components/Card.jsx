import '../styles/Card.css';

export default function Card({ name, src }) {
  return (
    <div className="card">
      <img src={src} alt="Pokemon image" />
      <h2>{name}</h2>
    </div>
  );
}
