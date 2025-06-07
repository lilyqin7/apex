import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx'
import TeamPage from './pages/Team.jsx'
import BuggyPage from './pages/Buggies.jsx'
import InvolvedPage from './pages/Involved.jsx';
import EventsPage from './pages/Events.jsx';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meettheteam" element={<TeamPage />} />
        <Route path="/meetthebuggies" element={<BuggyPage />} />
        <Route path="/getinvolved" element={<InvolvedPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App