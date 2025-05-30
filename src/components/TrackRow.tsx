import React from 'react';

export interface TrackRowProps {
  name: string;
  artist: string;
  url: string;
}

/**
 * Горизонтальная карточка трека.
 * @param props.name Название
 * @param props.artist Исполнитель
 * @param props.url Ссылка, на которую ведёт кнопка
 */
const TrackRow: React.FC<TrackRowProps> = ({ name, artist, url }) => (
  <div className="track-row">
    <button className="track-play" aria-label="Play">
      ▶︎
    </button>
    <button className="track-fav" aria-label="Add to favorites">
      ♡
    </button>
    <div className="track-info">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="track-title"
      >
        {name}
      </a>
      <span className="track-artist">{artist}</span>
    </div>
  </div>
);

export default TrackRow;