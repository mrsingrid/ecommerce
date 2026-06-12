import { FaBars, FaRegUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import "./Header.css";

function Header() {
  return (
    <header>
      <button type="button" aria-label="Open navigation menu">
        <FaBars className="header-icon" aria-hidden="true" />
      </button>

      <div className="header-brand">
        <a href="/" className="logo-link" rel="home">
          <h1>
            <img
              src="src/assets/images/logo.png"
              alt="Pulo do Gato Ateliê"
              className="logo-image"
            />
            <span className="visually-hidden">Pulo do Gato Ateliê</span>
          </h1>
        </a>
      </div>

      <div className="header-actions">
        <a href="/perfil" className="action-link" aria-label="Go to my account">
          <FaRegUser className="header-icon" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="action-button"
          aria-label="Open shopping cart"
        >
          <FiShoppingBag className="header-icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Header;
