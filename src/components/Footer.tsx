import React from 'react';

const Footer: React.FC = () => (
  <footer className="app-footer-top">
    <div className="app-footer-container">
      <div className="app-footer-row">
        <div className="app-footer-col">
          <h2 className="app-footer-heading">Компания</h2>
          <ul className="app-footer-links">
            <li><a href="/about">О Last.fm</a></li>
            <li><a href="/about/contact">Связаться с нами</a></li>
            <li><a href="/about/jobs">Вакансии</a></li>
            <li><a href="/features">Избранное</a></li>
          </ul>
        </div>
        <div className="app-footer-col">
          <h2 className="app-footer-heading">Справка</h2>
          <ul className="app-footer-links">
            <li><a href="https://www.last.fm/ru/about/trackmymusic">Отслеживай музыку</a></li>
            <li><a href="https://support.last.fm/" target="_blank" rel="noreferrer">Поддержка сообщества</a></li>
            <li><a href="https://www.last.fm/ru/help/guidelines">Правила сообщества</a></li>
            <li><a href="https://www.last.fm/ru/help/faq" target="_blank" rel="noreferrer">Справка</a></li>
          </ul>
        </div>
        <div className="app-footer-col">
          <h2 className="app-footer-heading">Фишки</h2>
          <ul className="app-footer-links">
            <li><a href="https://www.last.fm/ru/about/trackmymusic">Загрузить Скробблер</a></li>
            <li><a href="https://www.last.fm/ru/api">API для разработчиков</a></li>
            <li><a href="https://www.last.fm/ru/music/+free-music-downloads">Бесплатная загрузка</a></li>
            <li><a href="https://store.last.fm" target="_blank" rel="noreferrer">Товары</a></li>
          </ul>
        </div>
        <div className="app-footer-col">
          <h2 className="app-footer-heading">Аккаунт</h2>
          <ul className="app-footer-links">
            <li><a href="https://www.last.fm/ru/inbox">Входящие</a></li>
            <li><a href="https://www.last.fm/ru/settings">Настройки</a></li>
            <li><a href="https://www.last.fm/ru/pro">Last.fm Pro</a></li>
          </ul>
        </div>
        <div className="app-footer-col">
          <h2 className="app-footer-heading">Мы в соцсетях</h2>
          <ul className="app-footer-links">
            <li><a href="https://facebook.com/lastfm" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://x.com/lastfm" target="_blank" rel="noreferrer">X</a></li>
            <li><a href="https://bsky.app/profile/last.fm" target="_blank" rel="noreferrer">Bluesky</a></li>
            <li><a href="https://instagram.com/last_fm" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://youtube.com/user/lastfm" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;