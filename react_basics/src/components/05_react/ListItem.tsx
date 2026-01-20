import React from 'react';

interface ListItemProps {
  label: string;
}

const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return (
    <li className="bg-teal-500 text-white px-4 py-2 rounded mb-2 hover:bg-teal-600 transition">
      {label}
    </li>
  );
};

export default ListItem;

