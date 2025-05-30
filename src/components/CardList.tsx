import React from 'react';

interface ICardListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

/**
 * Список элементов (треки).
 */
const CardList = <T extends unknown>({ data, renderItem }: ICardListProps<T>) => (
  <div className="card-list">
    {data.map((item, i) => <React.Fragment key={i}>{renderItem(item)}</React.Fragment>)}
  </div>
);

export default CardList;