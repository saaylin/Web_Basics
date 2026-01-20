import React from 'react';
import ListItem from './ListItem';

const items = ['Coffee', 'Tea', 'Beer'];

const List: React.FC = () => {
  return (
    <ul className="w-40">
      {items.map((item, index) => (
        <ListItem key={index} label={item} />
      ))}
    </ul>
  );
};

export default List;
