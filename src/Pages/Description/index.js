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
} from "./styled";
import PokemonCard from "../../Components/Molecules/PokemonCard/index";
import { useSelector } from "react-redux";

const DescriptionPage = () => {
  const pokemon = useSelector((state) => state.pokemon);
  console.log(pokemon); // remover no final

  return (
    <>
      <MainHeader />
      <DescriptionContainer>
        <PokemonCardBox>
          <PokemonCard pokemon={pokemon} />
          <PokemonDescriptionContainer>
            Description:
          </PokemonDescriptionContainer>
        </PokemonCardBox>

        <SecondSection>
          <Abilities>
            Abilities:
            {pokemon.abilities.map((ability, index) => {
              return (
                <SingleAbility key={index}>
                  {ability.ability.name}
                </SingleAbility>
              );
            })}
          </Abilities>
          <StatsAndOther>
            <Stats>
              {pokemon.stats.map((stats, index) => {
                return (
                  <>
                    <StatBlock>
                      <span>{`${
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
              Height: {pokemon.height}
              <span></span> Weight: {pokemon.weight}
            </Characteristics>
          </StatsAndOther>
        </SecondSection>
      </DescriptionContainer>
    </>
  );
};

// pra pegar descrição do pokemon https://pokeapi.co/api/v2/pokemon-species/${id}
// path: flavor_text_entries[0].flavor_text

// pra pegar descrição das habilidades, entrar no objeto abilites e pegar numero da habilidade
// https://pokeapi.co/api/v2/ability/${numeroDaAbilidade}
//path: Estudar

//Coisas para arrumar:
//- Div do background nao fica com imagem fixa com relação a responsividade
//- ajustar fontes e tamanho das fontes
//- Após tudo isso:
// colocar descrição das habilidades
// pensar em inserir inputSearch no Home, acima dos pokemon
// estudar em como buscar flavor_text_entrie na API
export default DescriptionPage;
