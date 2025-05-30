import React from 'react';

export interface CardProps {
  title: string;
  subtitle?: string;
  img?: string;
  url: string;
}

/**
 * Квадратная карточка артиста.
 * @param props.title Заголовок карточки
 * @param props.subtitle Подзаголовок (опционально)
 * @param props.img URL изображения (опционально)
 * @param props.url Ссылка, на которую ведёт кнопка
 */
const CardSqr: React.FC<CardProps> = ({ title, subtitle = '', img, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="search-artist-card"
    style={{ backgroundImage: `url(${img || 'https://placehold.co/300x300?text=No+Image'})` }}
  >
    <div className="card-content">
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </a>
);

export default CardSqr;