import "./Cards.css";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { CharacterThunk } from "../../../store/modules/descriptionPokemon/thunks";

const PokemonCard = ({ pokemon, func }) => {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // Sprite pokemon
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  return (
    <>
      <div
        className={`containerPokemon ${pokemon.types[0].type.name}`}
        onClick={func}
        // {
        //   console.log(pokemon);
        //   dispatch(CharacterThunk({ pokemon }));
        //   history.push("/description");
        // }
      >
        <div>
          <img
            className="pokemonSprite circle-icon"
            src={img}
            alt={pokemon.name}
          />
        </div>
        <span className="pokemonId">{`#${pokemon.id}`}</span>
        <span className="pokemonName">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </span>
        <span className="pokemonType">
          {pokemon.types
            .map(
              (typeInfo) =>
                typeInfo.type.name.charAt(0).toUpperCase() +
                typeInfo.type.name.slice(1)
            )
            .join(" | ")}
        </span>
      </div>
    </>
  );
};

export default PokemonCard;
