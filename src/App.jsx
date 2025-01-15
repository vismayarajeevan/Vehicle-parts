import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Overview from './Pages/Overview'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
      </Routes>
    </>
  )
}

export default App
