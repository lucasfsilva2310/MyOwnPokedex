import MainHeader from "../../Components/Organisms/Header";
import {
  DescriptionContainer,
  PokemonCardBox,
  PokemonDescriptionContainer,
  SecondSection,
  Abilities,
  SingleAbility,
  StatsAndOther,
  Stats,
  Characteristics,
  StatBlock,
  TitleDescription,
  AbilityTitles,
} from "./styled";
import PokemonCard from "../../Components/Molecules/PokemonCard/index";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const DescriptionPage = () => {
  const pokemon = useSelector((state) => state.pokemon);

  useEffect(() => {
    document.body.style.cursor = "default";
  }, []);

  return (
    <>
      <MainHeader />
      <DescriptionContainer>
        <PokemonCardBox>
          <PokemonCard pokemon={pokemon} />
          <TitleDescription>Description:</TitleDescription>
          <PokemonDescriptionContainer>
            {pokemon.description}
          </PokemonDescriptionContainer>
        </PokemonCardBox>

        <SecondSection>
          <Abilities>
            <div className="TitleAbility">Abilities:</div>
            {pokemon.abilities.map((ability, index) => {
              return (
                <>
                  <AbilityTitles key={index}>
                    {ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)}
                  </AbilityTitles>
                  <SingleAbility>
                    {pokemon.descriptAbilities[index]}
                  </SingleAbility>
                </>
              );
            })}
          </Abilities>
          <StatsAndOther>
            <Stats>
              {pokemon.stats.map((stats, index) => {
                return (
                  <>
                    <StatBlock>
                      <span className="StatTitle">{`${
                        stats.stat.name.charAt(0).toUpperCase() +
                        stats.stat.name.slice(1)
                      } `}</span>{" "}
                      <span>{stats.base_stat}</span>
                    </StatBlock>{" "}
                    |
                  </>
                );
              })}
            </Stats>

            <Characteristics>
              Height:{" "}
              {pokemon.height < 10
                ? `0.${pokemon.height}m`
                : `${pokemon.height.toString()[0]}.${
                    pokemon.height.toString()[1]
                  }m`}
              <span></span> Weight:{" "}
              {pokemon.weight.toString().length < 3
                ? `${pokemon.weight.toString()[0]}.${
                    pokemon.weight.toString()[1]
                  }kg`
                : `${pokemon.weight.toString().slice(0, -1)}.${
                    pokemon.weight.toString()[
                      pokemon.weight.toString().length - 1
                    ]
                  }kg`}
            </Characteristics>
          </StatsAndOther>
        </SecondSection>
      </DescriptionContainer>
    </>
  );
};

// mudar cursor pra Loading
// container de input

export default DescriptionPage;
