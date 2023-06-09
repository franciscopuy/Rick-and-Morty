import { REMOVE_FAV, ADD_FAV, FILTER_CARDS, ORDER_CARDS } from "./actions";

const initialSate = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
      
    case FILTER_CARDS:
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : filteredCharacters,
      };

    case ORDER_CARDS:
      let charactersCopia = [...state.myFavorites];
      if (action.payload === "A") {
        charactersCopia.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        charactersCopia.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: charactersCopia,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;