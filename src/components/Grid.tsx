import React from 'react';

export interface IGridProps {
  children: React.ReactNode;
}

/**
 * Контейнер-сетка для карточек.
 * @param props.children Массив карточек внутри сетки
 */
const Grid: React.FC<IGridProps> = ({ children }) => (
  <div className="grid">{children}</div>
);

export default Grid;