import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Шапка приложения с навигацией.
 */
const Header: React.FC = () => (
  <header className="app-header">
    <nav>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        &#128269;
      </NavLink>
      <NavLink
        to="/top"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Музыка
      </NavLink>
    </nav>
  </header>
);

export default Header;