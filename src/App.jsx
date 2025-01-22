import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Overview from './Pages/Overview'
import CategoryView from './Pages/CategoryView'
import ChoicesView from './Pages/ChoicesView'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/categoryView/:category' element={<CategoryView />} />
        <Route path='/choices' element={<ChoicesView />} />
      </Routes>
    </>
  )
}

export default App
