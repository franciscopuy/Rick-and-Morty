import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import generarNumeroAleatorio from "../Random";

const Nav = ({ onSearch, logOut }) => {
  return (
    <nav>

      <h1>RICK AND MORTY</h1>

      <SearchBar onSearch={onSearch} />

      <button
        onClick={() => {
          onSearch(generarNumeroAleatorio());
        }}
      >
        Random
      </button>

      <button >
        <NavLink to="/home">
          Home
        </NavLink>
      </button>

      <button >
        <NavLink to="/about">
          About
        </NavLink>
      </button>

      <button >
        <NavLink to="/favorites">
          Favorites
        </NavLink>
      </button>

      <button >
        <NavLink
          
          to="/"
          onClick={logOut}
        >
          Log out
        </NavLink>
      </button>
    </nav>
  );
};

export default Nav;