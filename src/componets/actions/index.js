import { GET_CHARACTERS, REMOVE_FAVORITE,ADD_FAVORITE, SEARCH_CHARACTER} from "./constants";

export function getCharacters(){
    return function(dispatch){
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(json=> dispatch({
            type: GET_CHARACTERS,
            payload: json.results
        }))
    }
}

export function searchCharacter(name){
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(response => response.json())
        .then(json=> {
            dispatch ({
                type: SEARCH_CHARACTER,
                payload:json.results
            })
        })
    }
}

export function addFavorite(character){
    return{
        type: ADD_FAVORITE,
        payload: character
    }
}

export function removeFavorite(id){
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}