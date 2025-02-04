import React, { useState, useEffect } from 'react';
import './Character.css';

export const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };
    getCharacter();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Rick & Morty Characters</h1>
      <div className="grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

const CharacterCard = ({ character }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        onClick={() => setIsRotated(!isRotated)}
        className={isRotated ? 'rotated' : ''}
      />
      <h2 className="name">{character.name}</h2>
    </div>
  );
};

export default Character;