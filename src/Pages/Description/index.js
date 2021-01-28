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
        </PokemonCardBox>
        <PokemonDescriptionContainer>Description:</PokemonDescriptionContainer>
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
                return <span>{`${stats.stat.name} - ${stats.base_stat}`}</span>;
              })}
            </Stats>
            <Characteristics>
              Height: {pokemon.height}
              Weight: {pokemon.weight}
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
// https://pokeapi.co/api/v2/ability/${numero}
//path: Estudar

//Coisas para arrumar:
//- Div do background nao fica com imagem fixa com relação a responsividade
//- Ajustar design dos dados na tela description
//- Após tudo isso:
// colocar descrição das habilidades
// pensar em inserir inputSearch no Home, acima dos pokemon
// estudar em como buscar flavor_text_entrie na API
export default DescriptionPage;
