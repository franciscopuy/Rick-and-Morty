import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const URL = "https://be-a-rym.up.railway.app/api/character";
  const API_KEY = "2e22add2f3be.f3fd6560badc1d2bef10";

  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div >
      <div >
        <div >
          <h1>{character?.name}</h1>
          <h2>{character?.status}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.gender}</h2>
          <h2>{character?.origin?.name}</h2>
        </div>

        <div>
          <img
            src={character?.image}
            alt={character?.name}
          />
        </div>
      </div>
    </div>
  );
};
export default Detail;