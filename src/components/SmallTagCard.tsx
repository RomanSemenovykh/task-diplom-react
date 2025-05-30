import React from 'react';

export interface ISmallTagCardProps {
  name: string;
  imageUrl: string;
  url: string;
  className?: string;
}

/**
 * Маленькая плитка жанра.
 */
const SmallTagCard: React.FC<ISmallTagCardProps> = ({ name, imageUrl, url, className }) => (
  <a href={url} target="_blank" rel="noreferrer" className={`small-tag-card ${className || ''}`}>
    <div
      className="small-tag-bg"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-hidden="true"
    />
    <span className="small-tag-title">{name}</span>
  </a>
);

export default SmallTagCard;