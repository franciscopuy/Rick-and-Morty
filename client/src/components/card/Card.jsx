import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removefav } from "../../redux/action"
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removefav, mayFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removefav(id)
      } else {
         setIsFav(true)
         addFav({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
            onClose
         })
      }

   }

   useEffect(() => {
      mayFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [mayFavorites]);

   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>key: {id}</h2>
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <Link to={`/detail/${id}`}><p>Details</p></Link>
         <img src={image} alt='' />
         {
         isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
            )
         }
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character)=> {
         dispatch(addFav(character))
      },
      removefav: (id)=> {
         dispatch(removefav(id))
      }
   }
};
const mapStateToProps = (state) =>{
   return {
      mayFavorites: state.mayFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);