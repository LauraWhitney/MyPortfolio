import React from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return(
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<About/>} />
        <Route path='/' element={<Contact/>} />
      </Routes>
     </Router>

  )
}