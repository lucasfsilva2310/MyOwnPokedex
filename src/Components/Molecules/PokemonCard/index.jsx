import "./Cards.css";

const PokemonCard = ({ pokemon, func }) => {
  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;
  return (
    <>
      <div
        className={`containerPokemon ${pokemon.types[0].type.name}`}
        onClick={func}
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
