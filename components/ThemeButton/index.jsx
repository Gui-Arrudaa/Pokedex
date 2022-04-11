import { Sun, Moon } from 'react-feather';
import { useAppContext } from '../../contexts/AppContext';
import Button from "./index.styled";

const ThemeButton = () => {
  const { theme, changeTheme } = useAppContext();

  return ( 
    <Button onClick={changeTheme}>
      { theme ? <Sun /> : <Moon /> }
    </Button>
  );
};
 
export default ThemeButton;
