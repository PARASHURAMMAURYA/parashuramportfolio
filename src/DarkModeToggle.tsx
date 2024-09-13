import React from 'react';
import { useTheme } from './ThemeContext'; // Adjust the import path as necessary

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center">
      <input
        id="darkModeToggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="toggle-checkbox"
      />
    </div>
  );
};

export default DarkModeToggle;
