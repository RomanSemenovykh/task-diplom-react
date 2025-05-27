import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Шапка приложения с навигацией.
 */
const Header: React.FC = () => (
  <header className="app-header">
    <h1>Last.fm clone</h1>
    <nav>
      <NavLink to="/artists" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Исполнители
      </NavLink>
      <NavLink to="/tracks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Треки
      </NavLink>
      <NavLink to="/search" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        &#128269;
      </NavLink>
    </nav>
  </header>
);

export default Header;