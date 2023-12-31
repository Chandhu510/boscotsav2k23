import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import {Home, Events, About, Service, Gallery, Teams} from './pages'
import { DBEvent } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boscotsav2k23/" element={<Home />} />
        <Route path="/boscotsav2k23/events/*" element={<Events/>} />
        <Route path="/boscotsav2k23/about" element={<About />} />
        <Route path="/boscotsav2k23/contacts" element={<Service />} />
        <Route path="/boscotsav2k23/gallery" element={<Gallery />} />
        <Route path="/boscotsav2k23/events/:eventName" element={<DBEvent/>} />
        <Route path="/boscotsav2k23/teams" element={<Teams/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App