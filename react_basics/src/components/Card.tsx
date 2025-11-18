import React from 'react';
import './Card.css';

export const Card: React.FC = () => {
  return (
    <div className="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        className="avatar"
      />
      <div className="card-info">
        <h2>John Doe</h2>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};
