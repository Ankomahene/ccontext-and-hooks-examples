const lightBgPercentage = '100%';
const darkTextPercentage = '10%';

const darkBgPercentage = '14%';
const lightTextPercentage = '100%';

export const toggleTheme = (theme) => {
  if (theme === 'light') {
    document.documentElement.style.setProperty(
      '--bg-lightness',
      lightBgPercentage
    );
    document.documentElement.style.setProperty(
      '--text-lightness',
      darkTextPercentage
    );
  }

  if (theme === 'dark') {
    document.documentElement.style.setProperty(
      '--bg-lightness',
      darkBgPercentage
    );
    document.documentElement.style.setProperty(
      '--text-lightness',
      lightTextPercentage
    );
  }
};
