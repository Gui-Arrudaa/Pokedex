/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import PokemonCard from './index.styled';

const Pokemon = ({ pokemon, id }) => {
  const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const formatNumber = (num) => {
    if (num < 10) return `00${num}`;
    if (num < 100) return `0${num}`;
    return num;
  };

  return (
    <PokemonCard>
      <Link href={`/pokemon/${id}`} passHref>
        <a className="image-wrapper">
          <Image width={200} height={200} src={imagePath} />
        </a>
      </Link>
      <div className="info">
        <span>{pokemon}</span>
        <span className="number">nº{formatNumber(id)}</span>
      </div>
    </PokemonCard>
  );
};

export default Pokemon;
