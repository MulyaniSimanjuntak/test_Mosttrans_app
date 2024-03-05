import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CharacterItem({ character, onClick }) {
  const navigate = useNavigate();

  return (
    <li onClick={onClick}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </li>
  );
}