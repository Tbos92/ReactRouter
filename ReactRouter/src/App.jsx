import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red.jsx";
import Blue from "./components/Blue.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Orange from "./components/Orange.jsx";
import Green from "./components/Green.jsx";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/green" element={<Green />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
