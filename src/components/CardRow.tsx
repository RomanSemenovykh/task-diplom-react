import React from 'react';

export interface CardProps {
  title: string;
  subtitle?: string;
  img?: string;
  url: string;
}

/**
 * Горизонтальная карточка артиста.
 * @param props.title Заголовок карточки
 * @param props.subtitle Подзаголовок (опционально)
 * @param props.img URL изображения (опционально)
 * @param props.url Ссылка, на которую ведёт кнопка
 */
const CardRow: React.FC<CardProps> = ({ title, subtitle = '', img, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="card-row-link"
  >
    <img
      className="card-row-img"
      src={img || 'https://placehold.co/80x80?text=No+Image'}
      alt={title}
    />
    <div className="card-row-text">
      <h3 className="card-row-title">{title}</h3>
      {subtitle && <p className="card-row-subtitle">{subtitle}</p>}
    </div>
  </a>
);

export default CardRow;