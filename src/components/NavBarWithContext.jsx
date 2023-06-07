/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { toggleTheme } from '../helper';
import { ThemeContext } from '../context/themeContext';

export const NavBarWithContext = () => {
  const { theme, name } = useContext(ThemeContext);

  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);

  return (
    <div className="navbar">
      <h3>You are in {theme} mode</h3>
      <div>{name}</div>
    </div>
  );
};
