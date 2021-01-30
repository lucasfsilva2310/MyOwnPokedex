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
  const [description, setDescription] = useState("");
  const [abilityState, setAbilities] = useState([]);

  const getDescription = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) =>
        setDescription(res.data.flavor_text_entries[0].flavor_text)
      );
  };
  // ARRUMAR REQUISIÇÂO DESCRIÇÂO HABILIDADES
  //pensar se joga para o thunk, talvez ele nao esteja armazenando devido a isso
  //pq nao esta armazenando no array?
  console.log(pokemon);
  const getAbilities = (abilityLength) => {
    for (let i = 0; i < abilityLength; i++) {
      axios.get(pokemon.abilities[i].ability.url).then(
        (res) => console.log(res.data.flavor_text_entries[0].flavor_text)
        // setAbilities([
        //   ...abilityState,
        //   res.data.flavor_text_entries[0].flavor_text,
        // ])
      );
      console.log(abilityState);
    }
  };

  useEffect(() => {
    getDescription(pokemon.id);
    getAbilities(pokemon.abilities.length);
  }, []);

  return (
    <>
      <MainHeader />
      <DescriptionContainer>
        <PokemonCardBox>
          <PokemonCard pokemon={pokemon} />
          <TitleDescription>Description:</TitleDescription>
          <PokemonDescriptionContainer>
            {description}
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
                  <SingleAbility>{}</SingleAbility>
                  {/* habilidade vai aqui  abil[index]*/}
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

// pra pegar descrição das habilidades, entrar no objeto abilites e pegar numero da habilidade
// https://pokeapi.co/api/v2/ability/${numeroDaAbilidade}
//path: Estudar

// - ajustar background diminuido enquanto esta no "loading"

export default DescriptionPage;
