import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ArtistsPage from './pages/ArtistsPage';
import TracksPage from './pages/TracksPage';
import SearchPage from './pages/SearchPage';

/**
 * Основной компонент приложения с маршрутизацией.
 */
const App: React.FC = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </main>
  </Router>
);

export default App;