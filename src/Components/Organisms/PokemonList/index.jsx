import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "../../Molecules/PokemonCard/index";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPokemonUrl, setNextPokemonUrl] = useState(1);

  //armazenando os pokemon em um state
  const getPokemons = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemonList([...pokemonList, res.data]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (nextPokemonUrl <= 150) {
      //se houver menos de 150 pokemon no array
      getPokemons(nextPokemonUrl);
      setNextPokemonUrl(nextPokemonUrl + 1);
    }
  }, [pokemonList]);

  //Enquanto estiver armazenando os pokemons
  if (pokemonList.length < 119) {
    return <div className="loading">Loading . . .</div>;
  }

  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return <PokemonCard pokemon={pokemon} />;
      })}
    </>
  );
};

export default PokemonList;
