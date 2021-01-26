import "./reset.css";

import { Link, Route, Switch } from "react-router-dom";

import MainHeader from "./Components/Organisms/Header";
import { MainContainer } from "./Components/Atoms/MainContentDiv/styledContainer";
import PokemonCard from "./Components/Molecules/PokemonCard/index";
import PokemonList from "./Components/Organisms/PokemonList/index";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainHeader />
          <MainContainer>
            <PokemonList />
          </MainContainer>
        </Route>
        <Route exact path="/description">
          <MainHeader />
          <h1>Oi</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
