import React from 'react'
import "./App.css";

import Home from './pages/Home'
import Movies from './pages/Movies'
import ErrorPage from './pages/ErrorPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies/*' element={<Movies />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;