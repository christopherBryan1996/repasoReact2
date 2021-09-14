import React from "react"
export default function Formulario(){
    const [input, setInput] = React.useState({})
    function onInputChange(evento){
        setInput({
            ...input,
            [evento.target.name]: evento.target.value
        })
    }
    console.log(input)
    return <form>
        <label htmlFor='nombre'>Nombre: </label>
        <input type='text' id='nombre' onChange={onInputChange} name='nombre' value={input.nombre}/>
        <label htmlFor='apellido'>Apellido: </label>
        <h1>{input.nombre}</h1>
        <img src={input.nombre} alt=''/>
        <input type='text' id='apellido' onChange={onInputChange} name='apellido' value={input.apellido}/>
    </form>
}