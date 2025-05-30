import React from 'react';

export interface TrackItemProps {
  name: string;
  artist: string;
  url: string;
  img?: string;
}

/**
 * Горизонтальная карточка трека страницы топов.
 * @param props.name Название
 * @param props.artist Исполнитель
 * @param props.img URL изображения (опционально)
 * @param props.url Ссылка, на которую ведёт кнопка
 */
const TrackItem: React.FC<TrackItemProps> = ({ name, artist, url, img }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="track-item"
  >
    <img
      src={img || 'https://placehold.co/48x48?text=No+Image'}
      alt={name}
    />
    <div className="info">
      <span className="title">{name}</span>
      <span className="artist">{artist}</span>
    </div>
  </a>
);

export default TrackItem;