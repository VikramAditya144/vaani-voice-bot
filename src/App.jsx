import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PitchDeckPage from './pages/PitchDeckPage'
import IndustriesMain from './components/IndustriesMain';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pitch-deck" element={<PitchDeckPage />} />
          <Route path="/industries" element={<IndustriesMain />} />
        <Route path="/industries/:industryId" element={<IndustriesMain />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
