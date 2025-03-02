import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import CategoryView from './Pages/CategoryView'
import ChoicesView from './Pages/ChoicesView'
import CardOverview from './Pages/CardOverview'
import { ToastContainer } from 'react-toastify'
import MyPost from './Pages/MyPost'
import Admin from './AdminFiles/Admin'

function App() {
  

  return (
    <>
    <ToastContainer/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/overview/:id' element={<CardOverview />} />
        <Route path="/category/:categoryName" element={<CategoryView />} /> 
        <Route path='/choices' element={<ChoicesView />} />
        <Route path='/myposts' element={<MyPost />} />
      </Routes>
    </>
  )
}

export default App
