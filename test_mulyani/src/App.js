import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersList from './pages/CharactersList';
import DetailCharacter from './pages/DetailCharacter';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route path="/detail/:id" element={<DetailCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;
