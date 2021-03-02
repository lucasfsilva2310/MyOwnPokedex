import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "../../Molecules/PokemonCard/index";
import { LoadingContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CharacterThunk } from "../../../store/modules/descriptionPokemon/thunks";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPokemonUrl, setNextPokemonUrl] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();

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
    //pegar somente 150 pokemon
    if (nextPokemonUrl <= 150) {
      getPokemons(nextPokemonUrl);
      setNextPokemonUrl(nextPokemonUrl + 1);
    }
  }, [pokemonList]);

  const toDescription = (pokemon) => {
    document.body.style.cursor = "wait";
    dispatch(CharacterThunk(pokemon));
    setTimeout(() => history.push("/description"), 2000);
  };
  //Enquanto estiver armazenando os pokemons
  if (pokemonList.length < 119) {
    return <LoadingContainer>LOADING . . .</LoadingContainer>;
  }

  return (
    <>
      {/* criar uma div aqui parar separar os cards do input */}
      {pokemonList.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            func={() => toDescription(pokemon)}
          />
        );
      })}
    </>
  );
};

export default PokemonList;
