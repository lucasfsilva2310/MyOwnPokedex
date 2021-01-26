import { createStore, combineReducers } from "redux";
import characterReducer from "./modules/descriptionPokemon/reducers";

const reducers = combineReducers({ pokemons: characterReducer });

const store = createStore(reducers);

export default store;
