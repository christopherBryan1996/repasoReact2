import { connect } from "react-redux"
import { removeFavorite } from "../actions"
function Favorites(props){
    console.log(props.favoiriteCharacters)
    return <div>
        {props.favoiriteCharacters.map((favorito=>{
            return <div>
            <button onClick={()=>{
                props.removeFavorite(favorito.id)
            }}>x</button><span><h1>{favorito.name}</h1></span>
            <img src={favorito.image} alt='personaje favorito'/>
            
            </div>
        }))}
        </div>
}
function mapStateToPropos(state){
    return {
        favoiriteCharacters: state.favoiriteCharacters
    }
}
export default connect(mapStateToPropos,{removeFavorite}) (Favorites)