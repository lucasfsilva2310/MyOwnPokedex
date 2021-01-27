import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier", sans-serif;
  font-size: 2rem;

  a {
    text-decoration: none;
  }
  a:hover {
    color: rgb(216, 211, 211);
    text-decoration: none;
  }
  a:visited {
    color: white;
    text-decoration: none;
  }
`;
