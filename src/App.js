import "./reset.css";

import { Link, Route, Switch } from "react-router-dom";

import MainHeader from "./Components/Organisms/Header";
import { MainContainer } from "./Components/Atoms/MainContentDiv/styledContainer";
import PokemonCard from "./Components/Molecules/PokemonCard/index";
import PokemonList from "./Components/Organisms/PokemonList/index";

function App() {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <PokemonList />
      </MainContainer>
    </>
  );
}

export default App;
