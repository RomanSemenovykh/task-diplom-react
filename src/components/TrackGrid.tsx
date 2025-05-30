import React from 'react';

interface ITrackGridProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

/**
 * Сетка треков.
 */
const TrackGrid = <T extends unknown>({ data, renderItem }: ITrackGridProps<T>) => (
  <div className="track-grid">
    {data.map((item, i) => <React.Fragment key={i}>{renderItem(item)}</React.Fragment>)}
  </div>
);

export default TrackGrid;