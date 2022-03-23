import './App.css';
import {useEffect, useState} from 'react';
import PokeForm from './PokeForm/PokeForm';
import axios from 'axios';

function App() {
  const [nombrePokemon, setNombrePokemon] = useState( null );
  const [listaPokemones, setListaPokemones] = useState( [] );

  const buscarPokemones = ( e ) => {
    e.preventDefault();
    setNombrePokemon( (nombrePrev) => 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807' );
  }

  useEffect(()=>{
    axios.get( nombrePokemon )
        .then( response => {
          setListaPokemones( response.data.results )
        })
        .catch( err => {
          console.log( err );
        })
  }, [nombrePokemon]); 

  return (
    <div className="App">
      <PokeForm buscarPokemones={buscarPokemones}/>
      <div className='container'>
        {
          listaPokemones.map( (pokemon, indice) => {
            return (
              <li key={indice}>
                {indice} - {pokemon.name}
              </li>
            );
          })
        }  
      </div>
    </div>
  );
}

export default App;