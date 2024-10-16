import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav style={{ display: "flex", gap: "10rem" }}s>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/orange">Orange</Link>
        <Link to="/green">Green</Link>
      </nav>
    </div>
  );
};

export default Navbar;
