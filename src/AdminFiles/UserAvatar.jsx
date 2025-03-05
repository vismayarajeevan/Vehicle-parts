


import React from 'react';

const UserAvatar = ({ name }) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  return (
    <div
      style={{
        width: '40px', // Default size
        height: '40px', // Default size
        borderRadius: '50%',
        backgroundColor: '#DBEAFE',
        color: '#1E40AF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px', // Default font size
      }}
      className="user-avatar" // Add a class for media queries
    >
      {firstLetter}
    </div>
  );
};

export default UserAvatar;