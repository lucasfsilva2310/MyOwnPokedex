import { Link } from "react-router-dom";
import "./link.css";
const Home = () => {
  return (
    <>
      <Link to="/">
        <h2 className="navBarItem">Home</h2>
      </Link>
    </>
  );
};

export default Home;

// colocar cada atomo no seu lugar, e
//criar uma molecula com div e rota dentro
