import Head from 'next/head';
import { useAppContext } from '../contexts/AppContext';

import NavBar from '../components/Navbar';
import Container from '../components/Container';
import SearchBar from '../components/Search';
import PokemonList from '../components/PokemonList';
import Pokemon from '../components/Pokemon';

export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/1/')
    .then((response) => response.json())
    .then((data) => data.pokemon_entries);

  return {
    props: {
      pokemons,
    },
  };
}

const Home = ({ pokemons }) => {
  const { input } = useAppContext();

  const filteredData = pokemons.filter((pokemon) => {
    if (input === '') {
      return pokemon;
    }
    return pokemon.pokemon_species.name.includes(input);
  });

  return (
    <>
      <Head>
        <title>Master Pokédex</title>
      </Head>
      <NavBar />
      <Container>
        <SearchBar />
        <PokemonList>
          {filteredData.map((pokemon) => {
            return (
              <Pokemon key={pokemon.entry_number} pokemon={pokemon.pokemon_species.name} id={pokemon.entry_number} />
            );
          })}
        </PokemonList>
      </Container>
    </>
  );
};

export default Home;
