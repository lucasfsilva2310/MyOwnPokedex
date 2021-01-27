import { createStore, combineReducers, applyMiddleware } from "redux";
import characterReducer from "./modules/descriptionPokemon/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ pokemon: characterReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
