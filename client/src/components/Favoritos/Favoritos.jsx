import { useSelector } from "react-redux";
import Card from "../card/Card";
const Favoritos = () => {
    const favS = useSelector((state)=> state.mayFavorites)
    return(
        <>
            {favS.map(({ name, status, species, gender, origin, image, id })=>{
                return ( <Card 
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  
                />
               );
            })}
        </>
        
    )
}
export default Favoritos;