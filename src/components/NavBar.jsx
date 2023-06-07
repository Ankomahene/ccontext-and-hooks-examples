/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { toggleTheme } from '../helper';

export const NavBar = (props) => {
  useEffect(() => {
    toggleTheme(props.theme);
  }, [props]);

  return (
    <div className="navbar">
      <h3>You are in {props.theme} mode</h3>
      <div>{name}</div>
    </div>
  );
};
