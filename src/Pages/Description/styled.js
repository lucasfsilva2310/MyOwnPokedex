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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SecondSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Abilities = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const SingleAbility = styled.div`
  font-size: 1.2rem;
  /* width: fit-content; */
  padding: 5%;
  margin: 5%;
`;

export const StatsAndOther = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  padding: 1%;
  margin: 5%;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  padding: 1%;
  margin: 5%;
`;
