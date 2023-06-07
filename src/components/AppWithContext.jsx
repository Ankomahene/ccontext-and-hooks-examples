import { ThemeContext } from '../context/themeContext';
import '../style/App.css';
import { NavBarWithContext } from './NavBarWithContext';

// import { Form } from './useState/Form';

export function AppWithContext() {
  return (
    <>
      <ThemeContext.Provider value={{ theme: 'dark' }}>
        <NavBarWithContext />
      </ThemeContext.Provider>
    </>
  );
}
