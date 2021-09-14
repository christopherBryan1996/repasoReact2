import React, {useEffect} from 'react'
function Character(props){
    const [personaje, setpersonaje] = React.useState({})
    function getCharactersById(){
        fetch(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
        .then(response => response.json())
        .then(character=> setpersonaje(character))
    }
    useEffect(() => {
        getCharactersById()
    }, [])

    return <div>
        <h2>{personaje.name}</h2>
        <img src={personaje.image} alt='personaje' />
        <p>{personaje.species}</p>
    </div>
}

export default Character