import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import NavBar from './components/NavBar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import AdminPortal from './pages/AdminPortal'

const App = () => {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/coffees')
      .then(res => res.json())
      .then(data => setCoffees(data))
      .catch(err => console.error('Fetch error:', err))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop coffees={coffees} setCoffees={setCoffees} />} />
        <Route path="/admin_portal" element={<AdminPortal coffees={coffees} setCoffees={setCoffees} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App