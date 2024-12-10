import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { show } from "../../services/petsService";

const PetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});

  useEffect(() => {
    const getPet = async () => {
      const petData = await show(id)
      setPet(petData)
    }
    getPet()
  }, [])

  return (
    <div>
      <h1>{pet.name}</h1>
      <h3>Breed: {pet.breed}</h3>
      <h3>Age: {pet.age}</h3>
    </div>
  );
};

export default PetDetail;
