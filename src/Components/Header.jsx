import mainLogo from "../assets/images/LOGO.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/home" className="Site-logo">
          <img src={mainLogo} alt="Logo" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
