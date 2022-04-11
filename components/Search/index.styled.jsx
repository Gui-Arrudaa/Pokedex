import styled from 'styled-components';

const Search = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 50%;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  display: flex;

  &:focus-within {
    outline: 2px solid #3393b9;
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;
  }

  label {
    padding: 0.75rem 1rem;
  }

  input {
    background-color: ${({ theme }) => theme.bg};
    color: ${(props) => props.theme.color};
    width: 100%;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }
`;

export default Search;
