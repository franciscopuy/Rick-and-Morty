import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
const Nav = ({ onSearch, logout }) =>{
   
        return(
                <nav>
                 <SearchBar onSearch={onSearch}/>
                 <button><Link to="/home">Home</Link></button>
                 <button><Link to="/about">About</Link></button>
                 <button><Link to="/Favoritos">Favoritos</Link></button>
                 <button onClick={logout}>salida</button>
                </nav>
                
         )
}

export default Nav;