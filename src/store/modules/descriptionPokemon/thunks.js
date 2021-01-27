import { character } from "./actions";

export const CharacterThunk = (pokemon) => async (dispatch, getState) => {
  let info = {
    name: pokemon.name,
    id: pokemon.id,
    types: pokemon.types,
    weight: pokemon.weight,
    height: pokemon.height,
    stats: pokemon.stats,
    abilities: pokemon.abilities,
  };

  await dispatch(character(info));
};
