import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {searchCharacter} from '../actions/index'
function NavFuncional(props){
    
    const [search, setSearch]= React.useState('')
    function onInputChange(e){
        setSearch(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        props.searchCharacter(search)
        props.history.push('/search')
        setSearch('')//para limpiar 
    }
    return <div>
        <Link to='/'>
            <div>Home</div>
        </Link>
        <form onSubmit={handleSubmit}>
            <input type='text' value={search} onChange={onInputChange}/>
            <input type='submit' value='Buscar'/>
        </form>
        <Link to='/favoritos'>
            <div>favoritos</div>
        </Link>
        <Link to='/about'>
            <div>about</div>
        </Link>
    </div>
    
}
var mapDispatchToProps={
        searchCharacter
    }
export default connect(null,mapDispatchToProps) (NavFuncional)