import { Link } from "react-router-dom"
import { addFavorite } from "../actions"
import { connect } from "react-redux"
function Card(props){
    return <div>
        <Link to={`/character/${props.personaje.id}`} >
            <h2>{props.personaje.name}</h2>
            <img src={props.personaje.image} alt='personaje'/> 
        </Link>
        <button
        onClick={()=> props.addFavorite({
            id: props.personaje.id,
            name: props.personaje.name,
            image: props.personaje.image
        })}
        >Agregar a favoritos</button>
    </div>
}
export default connect(null,{addFavorite}) (Card)