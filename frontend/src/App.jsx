import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx'
import TeamPage from './pages/Team.jsx'
import BuggyPage from './pages/Buggies.jsx'
import InvolvedPage from './pages/Involved.jsx';
import EventsPage from './pages/Events.jsx';
import './index.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meettheteam" element={<TeamPage />} />
        <Route path="/meetthebuggies" element={<BuggyPage />} />
        <Route path="/getinvolved" element={<InvolvedPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App