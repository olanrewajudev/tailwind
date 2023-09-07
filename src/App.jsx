import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
