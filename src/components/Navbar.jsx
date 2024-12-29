import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'; // Import HamburgerMenu
import '../App.css';

function Navbar() {
  return (
    <nav className="header">
      <HamburgerMenu /> {/* Include HamburgerMenu */}
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;