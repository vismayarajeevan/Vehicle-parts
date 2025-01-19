import React from 'react'

import { colors } from '../colors'

const ToggleCategoryBtn = ({label,value,activeButton,setActiveButton}) => {
  return (
    <button
    type="button"
    onClick={() => setActiveButton(value)}
    style={{
      width: '68px',
      height: '35px',
      borderRadius: '20px',
      border: 'none',
      backgroundColor: activeButton === value ? colors.CategoryActiveButton : colors.AddPageButtonColr,
      color:activeButton === value ? colors.White :colors.Black,
      fontWeight:activeButton === value ? '700':'400'
    }}
  >
    {label}
  </button>
  )
}

export default ToggleCategoryBtn