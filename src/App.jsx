import React from 'react'
import Home from './components/home'
import Category from './components/category'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category' element={<Category />}></Route>
      </Routes>

    </>
  )
}

export default App