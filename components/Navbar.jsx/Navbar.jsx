import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pets">All Pets</Link>
    </nav>
  );
};

export default Navbar;
