import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import TopPage from './pages/TopPage';

/**
 * Основной компонент с маршрутами.
 */
const App: React.FC = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/"        element={<Navigate to="/top" replace />} />
        <Route path="/search"  element={<SearchPage />} />
        <Route path="/top"     element={<TopPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;