import Router from "./routes/Router";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalContext } from "./context/GlobalContext";
import axios from "axios";
import PokemonCard from "./components/card/PokemonCard"
import { GlobalStyle } from "./GlobalStyle";

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

useEffect(()=>{
getPokemons()
}, [])

const getPokemons = async ()=>{
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=110&offset=0")
    setPokemons(response.data.results)
  } catch (error) {
    console.log(error);
  }
}

const addPokedex = (pokemonAdicionado) => {
  const existeNaPokedex = pokedex.find((pokemonNaPokedex) => pokemonNaPokedex.name === pokemonAdicionado.name );
  if (!existeNaPokedex){
    const novoPokedex = [...pokedex, pokemonAdicionado]
    setPokedex(novoPokedex)
    alert('Adicionado a Pokédex')
  } else{alert('Este pokemon ja existe na Pokédex')}
}

const removerPokedex = (pokemonRemovido)=>{
const novoPokedex = pokedex.filter((pokemonNaPokedex)=> pokemonNaPokedex.name !== pokemonRemovido.name)
setPokedex(novoPokedex)
}

const renderPokemonLista = pokemons.map((pokemon)=>{
return <PokemonCard
key={pokemon.url}
pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
pokemon={pokemon.name}
addPokedex={addPokedex}
/>
})

const renderPokedex = pokedex.map((pokemon) => {
  return <PokemonCard
    key={pokemon.name}
    pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
    pokemon={pokemon.name}
    removerPokedex={removerPokedex}
  />
})

const context = {
  pokemons,
  setPokemons,
  pokedex,
  setPokedex,
  addPokedex,
  removerPokedex,
  renderPokemonLista,
  renderPokedex,
}

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
      <GlobalStyle />
    </GlobalContext.Provider>
  );
}

export default App;
