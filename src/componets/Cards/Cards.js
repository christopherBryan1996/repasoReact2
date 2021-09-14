import Card from "../Card/Card"
function Cards(props){
    return<div>
        {props.characters.map((personaje)=>{
            return <Card personaje={personaje}/>
        })}
    </div>
}


export default Cards