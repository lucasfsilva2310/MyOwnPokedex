import TitleImg from "../../Atoms/Title/index";
import NaveBar from "../../Molecules/NavBar/index";
import { HeaderContainer } from "./styledContainter";

const MainHeader = () => {
  return (
    <>
      <HeaderContainer>
        <TitleImg />
        <NaveBar />
      </HeaderContainer>
    </>
  );
};

export default MainHeader;
