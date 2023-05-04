import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Card =(props) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      console.log(props)
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div>
          <div className={style.topCard}>
            <button className={style.favButton} onClick={handleFavorite}>
              {isFav ? "❤️" : "🤍"}{" "}
            </button>

            <button className={style.closeButton} onClick={() => props.onClose(props.id)}>
              X
            </button>
          </div>

          <h3 className={style.nombre}>{props.name}</h3>
          <h4 className={style.especie}>{props.species}</h4>
          <h4 className={style.estado}>{props.status}</h4>
          <img src={props.image} alt="Imagen" />
          <Link to={`/detail/${props.id}`}>
            <button className={style.detailButton}>Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);