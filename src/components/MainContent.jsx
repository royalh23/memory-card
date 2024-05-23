import Card from './Card';
import '../styles/MainContent.css';
import { useEffect, useState } from 'react';
import getShuffledArray from '../utils/getShuffledArray';

export default function MainContent({ setScore, setBestScore }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?limit=12',
      );
      const data = await response.json();
      const promises = data.results.map(async (result) => {
        const response = await fetch(result.url);
        const pokemon = await response.json();

        return {
          name: pokemon.name,
          src: pokemon.sprites.front_default,
          id: pokemon.id,
        };
      });
      const requiredData = await Promise.all(promises);

      setLoading(false);
      setCards(getShuffledArray(requiredData));
    }

    fetchData();
  }, []);

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => (
          <Card key={card.id} name={card.name} src={card.src} />
        ))
      )}
    </main>
  );
}
