import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { index } from "../services/petsService";
import PetsList from "../components/PetsList/PetsList";
import Navbar from "../components/Navbar.jsx/Navbar";
import PetDetail from "../components/PetDetail/PetDetail";

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const allPets = async () => {
      const data = await index();
      setPets(data);
    };
    allPets();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Pets App</h1>} /> 
        <Route path="/pets" element={<PetsList petsData={pets} />} />
        <Route path="/pet/:id" element={<PetDetail petsData={pets} />} />
      </Routes>
    </>
  );
};

export default App;
