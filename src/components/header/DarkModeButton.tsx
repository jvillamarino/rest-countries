'use client';
import { useTheme } from 'next-themes';
import { BiMoon, BiSolidMoon } from 'react-icons/bi';

export function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const isCurrentThemeLight = theme === 'light';

  function toggleTheme(): void {
    const changedTheme = isCurrentThemeLight ? 'dark' : 'light';
    setTheme(changedTheme);
  }

  return (
    <button className="nav-theme-button" onClick={toggleTheme}>
      {isCurrentThemeLight ? <BiMoon /> : <BiSolidMoon />}
      Dark Mode
    </button>
  );
}
