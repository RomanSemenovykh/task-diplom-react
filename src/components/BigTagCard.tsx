import React from 'react';
import { IArtist } from '../api';

export interface IBigTagCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  url: string;
  topArtists: IArtist[];
  className?: string;
}

/**
 * Большая карточка жанра.
 */
const BigTagCard: React.FC<IBigTagCardProps> = ({ title, summary, imageUrl, url, topArtists, className }) => (
  <a href={url} target="_blank" rel="noreferrer" className={`big-tag-card ${className || ''}`}>
    <div
      className="big-tag-bg"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-hidden="true"
    />
    <div className="big-tag-info">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  </a>
);

export default BigTagCard;