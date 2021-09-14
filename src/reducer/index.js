
import {GET_CHARACTERS,ADD_FAVORITE,REMOVE_FAVORITE, SEARCH_CHARACTER} from '../componets/actions/constants'
var inicialState={
    characters:[],
    favoiriteCharacters:[],
    searchedCharacters:[]
}

export default function reducer(state=inicialState, action){
    switch(action.type){
        case  GET_CHARACTERS:
            return{
                ...state,
                characters: [...action.payload]
            }
        case ADD_FAVORITE:
            return{
                ... state,
                favoiriteCharacters:[...state.favoiriteCharacters,action.payload]
            }
        case REMOVE_FAVORITE:
            var newArry= state.favoiriteCharacters.filter(personaje=>{
                return action.payload !==personaje.id
            })
            return{
                ...state,
                favoiriteCharacters: newArry
            }
        case SEARCH_CHARACTER:
            return {
                ...state,
                searchedCharacters: [...action.payload]
            }
        default: 
        return state
    }

}