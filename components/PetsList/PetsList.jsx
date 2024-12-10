import { Link } from "react-router-dom";

const PetsList = ({ petsData }) => {
  return (
    <div>
      {petsData.map((pet) => (
        <Link key={pet._id} to={`/pet/${pet._id}`}>{pet.name}</Link>
      ))}
    </div>
  );
};

export default PetsList;
