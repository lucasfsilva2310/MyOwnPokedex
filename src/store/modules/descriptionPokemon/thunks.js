import { character } from "./actions";
import axios from "axios";

export const CharacterThunk = (pokemon) => (dispatch, getState) => {
  let info = {
    name: pokemon.name,
    id: pokemon.id,
    types: pokemon.types,
    weight: pokemon.weight,
    height: pokemon.height,
    stats: pokemon.stats,
    abilities: pokemon.abilities,
    descriptAbilities: [],
  };

  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
    .then(
      (res) =>
        (info["description"] = res.data.flavor_text_entries[0].flavor_text)
    );

    for (let i = 0; i < info.abilities.length; i++) {
    axios.get(pokemon.abilities[i].ability.url).then((res) => {
      info["descriptAbilities"] = [
        ...info["descriptAbilities"],
        res.data.flavor_text_entries[0].flavor_text,
      ];
    });
  }

  dispatch(character(info));
};
