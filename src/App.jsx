import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import CategoryView from './Pages/CategoryView'
import ChoicesView from './Pages/ChoicesView'
import CardOverview from './Pages/CardOverview'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview/:id' element={<CardOverview />} />
        <Route path="/category/:categoryName" element={<CategoryView />} /> 
        {/* <Route path='/categoryView/:category' element={<CategoryView />} /> */}
        <Route path='/choices' element={<ChoicesView />} />
      </Routes>
    </>
  )
}

export default App
