import { ArrowLeft, ArrowRight } from 'react-feather';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import NavBar from '../../components/Navbar';
import DetailsContainer from '../../components/DetailsContainer';
import Button from '../../components/Button';

export async function getStaticPaths() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/1/')
    .then((response) => response.json())
    .then((data) => data.pokemon_entries);

  return {
    paths: pokemons.map((pokemon) => ({
      params: {
        id: pokemon.entry_number.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
    .then((response) => response.json());

  return {
    props: {
      pokemon,
    },
  };
}

const Details = ({ pokemon }) => {
  const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const formatId = (num) => {
    if (num < 10) return `00${num}`;
    if (num < 100) return `0${num}`;
    return num;
  };

  const formatHeight = (num) => {
    return `${num / 10} m`;
  };

  const formatWeight = (num) => {
    return `${num / 10} kg`;
  };

  const formatText = (string) => {
    return string.replace('-', ' ');
  };

  const formatTitle = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Head>
        <title>Master Pokédex - {formatTitle(pokemon.name)}</title>
      </Head>
      <NavBar />
      <DetailsContainer>
        <div className="pokemon">
          <div className="image-wrapper">
            <Image layout="fill" src={imagePath} quality={100} />
          </div>
          <div className="info">
            <h1>{pokemon.name}</h1>
            <div className="numbers">
              <span>
                <strong>National Dex: </strong>Nº{formatId(pokemon.id)}
              </span>
              <span>
                <strong>Height: </strong>{formatHeight(pokemon.height)}
              </span>
              <span>
                <strong>Weight: </strong>{formatWeight(pokemon.weight)}
              </span>
            </div>
            <ul className="abilities">
              <span>
                <strong>Abilities: </strong>
              </span>
              {pokemon.abilities.map((poke) => {
                return <li key={poke.id}>{formatText(poke.ability.name)}</li>;
              })}
            </ul>
            <ul className="types">
              <span>
                <strong>Type: </strong>
              </span>
              {pokemon.types.map((poke) => {
                return <li key={poke.id}>{poke.type.name}</li>;
              })}
            </ul>
            <ul className="stats">
              <span>
                <strong>Stats:</strong>
              </span>
              {pokemon.stats.map((poke) => {
                return (
                  <li key={poke.id}>
                    <div className="flex-stats">
                      <span>{formatText(poke.stat.name)}: </span>
                      <progress max={200} value={poke.base_stat} title={poke.base_stat} />
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link href="/" passHref>
              <button className="go-back" type="button">
                Go Back
              </button>
            </Link>
          </div>
        </div>
        <div className="buttons">
          <Link href={pokemon.id - 1 === 0 ? '/pokemon/898' : `/pokemon/${pokemon.id - 1}`} passHref>
            <Button>
              <ArrowLeft />
            </Button>
          </Link>
          <Link href={pokemon.id + 1 === 899 ? '/pokemon/1' : `/pokemon/${pokemon.id + 1}`} passHref>
            <Button>
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </DetailsContainer>
    </>
  );
};

export default Details;
