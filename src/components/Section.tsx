import React from 'react';

interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Блочный раздел с заголовком.
 */
const Section: React.FC<ISectionProps> = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;