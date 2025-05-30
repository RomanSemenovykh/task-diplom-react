import React from 'react';

interface CardGridProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

/**
 * Сетка карточек.
 */
const CardGrid = <T extends unknown>({ data, renderItem, className }: CardGridProps<T>) => (
  <div className={`card-grid ${className || ''}`}>
    {data.map((item, i) => <React.Fragment key={i}>{renderItem(item)}</React.Fragment>)}
  </div>
);

export default CardGrid;