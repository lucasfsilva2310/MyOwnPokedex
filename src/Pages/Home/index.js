import MainHeader from "../../Components/Organisms/Header";
import { MainContainer } from "../../Components/Atoms/MainContentDiv/styledContainer";
import PokemonList from "../../Components/Organisms/PokemonList/index";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <PokemonList />
      </MainContainer>
    </>
  );
};

export default HomePage;
