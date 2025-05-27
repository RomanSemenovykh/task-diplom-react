import React from 'react';

export interface CardProps {
  title: string;
  subtitle?: string;
  img?: string;
  url: string;
}

/**
 * Карточка артиста или трека.
 * @param props.title Заголовок карточки
 * @param props.subtitle Подзаголовок (опционально)
 * @param props.img URL изображения (опционально)
 * @param props.url Ссылка, на которую ведёт кнопка
 */
const Card: React.FC<CardProps> = ({ title, subtitle = '', img, url }) => (
  <div className="card">
    <img src={img || 'https://via.placeholder.com/300x200?text=No+Image'} alt={title} />
    <h3>{title}</h3>
    {subtitle && <p>{subtitle}</p>}
    <a href={url} target="_blank" rel="noreferrer">Перейти</a>
  </div>
);

export default Card;