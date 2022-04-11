import styled from 'styled-components';

const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default PokemonList;
