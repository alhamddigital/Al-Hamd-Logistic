import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './Pages/Gallery'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App