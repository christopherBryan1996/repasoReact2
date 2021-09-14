import {Route} from 'react-router-dom'
import Cards from './componets/Cards/Cards'
import './App.css';
import { connect } from 'react-redux';
import {getCharacters} from './componets/actions/index'
import React from 'react';
import NavFuncional from './componets/Nav/Nav';
import Character from './componets/Character/Character';
import Favorites from './componets/Favorites/favorites';
import Formulario from './componets/formulario/Formulario';

function App(props) {
  React.useEffect(() => {//componente funcional
    props.getCharacters()// se ejecuta cuando se inicia
  }, [])
  return (
    <div className="App">
      <Route component={NavFuncional}/>
      <Route exact path='/'>
        <Cards characters={props.characters}/>
      </Route>
      <Route exact path='/search'>
        <Cards characters={props.searchedCharacters}/>
      </Route>
      <Route exact path='/character/:id' component={Character}/>
      <Route exact path='/about'>
        About
      </Route>
      <Route exact path='/formulario'>
        <Formulario/>
      </Route>
      <Route exact path='/favoritos'>
        <Favorites/>
      </Route>

    </div>
  );
}

//connect(mapStatrToProps, mapDispatchToProps)
//mapStateToPropos: Funcion que retorna la parte 
//del estado que quiero traerme del store
//mapDispatchToProps: es un objetp que tiene 
//las acciones que quiero usar en mi componente 

//el primer parametro es estado global
function mapStateToPropos(state){
  return{
      characters: state.characters,
      searchedCharacters: state.searchedCharacters
  }
}

export default connect(mapStateToPropos,{getCharacters}) (App);
