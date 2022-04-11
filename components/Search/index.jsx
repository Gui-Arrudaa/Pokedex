/* eslint-disable jsx-a11y/label-has-associated-control */
import { Search as SearchIcon, X } from 'react-feather';
import { useAppContext } from '../../contexts/AppContext';
import Search from './index.styled';
import Button from '../Button';

const SearchBar = () => {
  const { input, inputHandleChange, reset } = useAppContext();

  return (
    <Search>
      <label htmlFor="input">
        <SearchIcon />
      </label>
      <input
        autoComplete="off"
        placeholder="Search for a pokemon"
        type="text"
        id="input"
        onInput={inputHandleChange}
        value={input}
      />
      {input.length === 0 ? (
        ''
      ) : (
        <Button onClick={reset}>
          <X />
        </Button>
      )}
    </Search>
  );
};

export default SearchBar;
