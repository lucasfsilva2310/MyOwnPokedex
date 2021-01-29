import styled from "styled-components";

export const DescriptionContainer = styled.div`
  background-image: url("https://i.ibb.co/vmVY6HY/rotom.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  width: 80%;
  height: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PokemonDescriptionContainer = styled.div`
  width: 100%;
  font-size: 1.7rem;
`;

export const PokemonCardBox = styled.div`
  border: 2px solid purple; //roxo
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SecondSection = styled.div`
  border: 2px solid brown; //marron
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Abilities = styled.div`
  border: 2px solid green; //verde
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SingleAbility = styled.div`
  border: 2px solid yellow; //amarelo
  font-size: 1.2rem;
  width: 100%;
  padding: 5%;
  margin: 5%;
`;

export const StatsAndOther = styled.div`
  border: 2px solid red; //vermelho
  width: 50%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
`;

export const Stats = styled.div`
  border: 2px solid black; //preto
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  padding: 1%;
  margin: 5%;
  span {
    padding: 10px;
  }
`;

export const StatBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
`;

export const Characteristics = styled.div`
  border: 2px solid blue; //azul
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.1rem;
  padding: 1%;
  margin: 5%;
`;
