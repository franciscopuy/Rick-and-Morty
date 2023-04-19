import { REMOVE_FAV, ADD_FAV } from "./action"
const initialState = {
    mayFavorites: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                mayFavorites: [
                    ...state.mayFavorites,
                    action.payload
                ]
            }
        case REMOVE_FAV:
            return {
                ...state,
                mayFavorites: state.mayFavorites.filter((char) => char.id !== action.payload)
            }
        default:
            return {...state}
    }
}
export default rootReducer;