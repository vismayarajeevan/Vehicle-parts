import React from 'react'

const UserAvatar = ({ name }) => {
    const firstLetter = name ? name.charAt(0).toUpperCase() : '';
  return (
    <div
    style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#DBEAFE',
      color: '#1E40AF ',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      
    }}
  >
    {firstLetter}
  </div>
  )
}

export default UserAvatar