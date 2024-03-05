import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Container, Row, Col, Card } from 'react-bootstrap';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(res => setCharacters(res.data.results));
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <Container>
      <h1>Daftar Karakter</h1>
      <Row>
        {characters.map(character => (
          <Col key={character.id} md={4}>
            <Card>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>{character.species}</Card.Text>
                <Link to={`/detail/${character.id}`}>Lihat Detail</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <button onClick={handlePrevPage}>Sebelumnya</button>
        <button onClick={handleNextPage}>Berikutnya</button>
      </div>
    </Container>
  );
};

export default CharactersList;
