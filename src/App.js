import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, Events, About, Service, Gallery} from './pages'
import { DBEvent } from './components'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="//" element={<Home />} />
        <Route path="boscotsav2k23/events/*" element={<Events />} />
        <Route path="boscotsav2k23/about" element={<About />} />
        <Route path="contacts" element={<Service />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="events/:eventName" element={<DBEvent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App