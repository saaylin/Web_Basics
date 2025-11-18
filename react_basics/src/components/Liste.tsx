import React from 'react';
import './List.css';

const items = ['Coffee', 'Tea', 'Beer'];

export const List: React.FC = () => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item}>
          <button className="list-button">{item}</button>
        </li>
      ))}
    </ul>
  );
};
