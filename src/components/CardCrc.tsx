import React from 'react';

export interface ICardProps {
  title: string;
  subtitle?: string;
  img?: string;
  url: string;
}

/**
 * Карточка артиста.
 * @param props.title Заголовок карточки
 * @param props.subtitle Подзаголовок (опционально)
 * @param props.img URL изображения (опционально)
 * @param props.url Ссылка, на которую ведёт кнопка
 */
const CardCrc: React.FC<ICardProps> = ({ title, subtitle = '', img, url }) => (
  <a
    key={title}
    href={url}
    target="_blank"
    rel="noreferrer"
    className="card artist-card"
  >
    <img
      src={img || 'https://placehold.co/300x300?text=No+Image'}
      alt={title}
    />
    <span>{title}</span>
  </a>
);

export default CardCrc;