import { Link } from "react-router-dom";
import { LinkContainer } from "./styledLinkContainer";

const Home = () => {
  return (
    <>
      <LinkContainer>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </LinkContainer>
    </>
  );
};

export default Home;
