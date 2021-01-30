import styled from "styled-components";

export const DescriptionContainer = styled.div`
  border: 5px solid black;
  background-image: url("https://i.ibb.co/vmVY6HY/rotom.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 80%;
  margin: 0 auto;
  min-height: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PokemonDescriptionContainer = styled.div`
  background-color: rgba(191, 191, 191, 0.4);
  border-radius: 15px;
  padding: 2%;
  width: 100%;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleDescription = styled.div`
  font-size: 1.8rem;
`;

export const PokemonCardBox = styled.div`
  /* border: 2px solid purple; //roxo */
  display: flex;
  margin: 9% 9% 3.5% 9%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SecondSection = styled.div`
  /* border: 2px solid brown; //marron */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Abilities = styled.div`
  /* border: 2px solid green; //verde */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5%;
  .TitleAbility {
    font-size: 2rem;
  }
`;

export const AbilityTitles = styled.div`
  background-color: rgba(191, 191, 191, 0.4);
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.8rem;
  margin-top: 2%;
`;

export const SingleAbility = styled.div`
  background-color: rgba(191, 191, 191, 0.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  width: 65%;
  padding: 5%;
  margin: 5%;
`;

export const StatsAndOther = styled.div`
  /* border: 2px solid red; //vermelho */
  width: 50%;
  display: flex;
  padding-top: 5%;
  padding-bottom: 5%;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const Stats = styled.div`
  background-color: rgba(191, 191, 191, 0.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
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
  .StatTitle {
    font-size: 1.1rem;
  }
`;

export const Characteristics = styled.div`
  background-color: rgba(191, 191, 191, 0.4);
  border-radius: 15px;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.3rem;
  padding: 1%;
  margin: 5%;
`;
