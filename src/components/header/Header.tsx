import { DarkModeButton } from './DarkModeButton';
import './header.css';

export function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <h2 className="header-nav__title">Where in the world?</h2>
        <DarkModeButton></DarkModeButton>
      </nav>
    </header>
  );
}
