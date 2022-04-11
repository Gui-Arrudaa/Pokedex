import { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from '../../styles/Themes';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [input, setInput] = useState('');

  const changeTheme = () => {
    setTheme(!theme);
  };

  const inputHandleChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInput(lowerCase);
  };

  const reset = () => {
    setInput('');
  };

  const contextValue = useMemo(() => ({
    theme,
    changeTheme,
    input,
    inputHandleChange,
    reset,
  }));

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme ? Dark : Light}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
