import React from 'react';

export interface GridProps {
  children: React.ReactNode;
}

/**
 * Контейнер-сетка для карточек.
 * @param props.children Массив карточек внутри сетки
 */
const Grid: React.FC<GridProps> = ({ children }) => (
  <div className="grid">{children}</div>
);

export default Grid;