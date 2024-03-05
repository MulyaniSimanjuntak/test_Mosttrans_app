import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios here

const DetailCharacter = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  const fetchCharacter = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    setCharacter(response.data);
  };

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <h2>Location: {character.location.name}</h2>
      <form>
        <label htmlFor="location">Update Location:</label>
        <input type="text" id="location" name="location" />
      </form>
    </div>
  );
};

export default DetailCharacter