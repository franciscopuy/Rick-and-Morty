import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";




const Detail = ()=>{

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '2e22add2f3be.f3fd6560badc1d2bef10 '   
const { id } = useParams();

const [Character, setCharacter] = useState({})

useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return (
        <div>

            <h2>{Character?.name}</h2>
            <h2>{Character?.status}</h2>
            <h2>{Character?.species}</h2>
            <h2>{Character?.gender}</h2>
            <h2>{Character?.origin?.name}</h2>
            <img src={Character?.image} alt={Character?.name} />

        </div>
    )
    
}

export default Detail;