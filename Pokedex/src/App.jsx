import { useEffect, useState } from 'react'
import PokemonCard from './components/Pokemoncard';
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302");
      const data = await response.json();

      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json();
        })
      );

      setPokemons(detailedPokemon);
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>Pokedéx</h1>
        <div className="pokemon-grid">
          {pokemons.map(pokemon => (
            <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
