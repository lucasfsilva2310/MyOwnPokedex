import MainHeader from "../../Components/Organisms/Header";
import { MainContainer } from "../../Components/Atoms/MainContentDiv/styledContainer";
import PokemonList from "../../Components/Organisms/PokemonList/index";
import { RootContainer } from "./styled";

const HomePage = () => {
  return (
    <>
      <RootContainer>
        <MainHeader />
        <MainContainer>
          <PokemonList />
        </MainContainer>
      </RootContainer>
    </>
  );
};

export default HomePage;
