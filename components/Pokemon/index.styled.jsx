import styled from 'styled-components';

const PokemonCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.bg};
    transition: transform 0.2s;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.08);
    }
  }

  div.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0.5rem;
    
    span {
      font-size: 120%;
      text-transform: capitalize;
      color: ${({ theme }) => theme.color};
    }

    .number {
      font-size: 1rem;
    }
  }
`;

export default PokemonCard;
