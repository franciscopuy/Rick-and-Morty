import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

         if(!data.length) throw new Error("No hay favoritos")

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message)
      }         
   };
};

// ACTION | removeFav
export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);

            if(!data.length) throw new Error("No hay favoritos")
        
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
         });
         
      } catch (error) {
         console.log(error.message)
      }
      
   };
};

export const filterCards = (gender) => ({
  type: FILTER_CARDS,
  payload: gender,
});

export const orderCards = (order) => ({ 
    type: ORDER_CARDS, 
    payload: order 
});