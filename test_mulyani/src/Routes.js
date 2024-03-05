import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import DetailCharacter from "./pages/DetailCharacter";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/characters/:id" element={<DetailCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}