import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Блочный раздел с заголовком.
 */
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;