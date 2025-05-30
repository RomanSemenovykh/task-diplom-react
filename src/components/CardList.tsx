import React from 'react';

interface CardListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

/**
 * Список элементов (треки).
 */
const CardList = <T extends unknown>({ data, renderItem }: CardListProps<T>) => (
  <div className="card-list">
    {data.map((item, i) => <React.Fragment key={i}>{renderItem(item)}</React.Fragment>)}
  </div>
);

export default CardList;