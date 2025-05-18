






// import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// //import NavBar from './components/NavBar'
// import Home from './pages/Home'
// import Shop from './pages/Shop'
// import AdminPortal from './pages/AdminPortal'

// const App = () => {
//   const [coffees, setCoffees] = useState([])
//   const [selectedLocations, setSelectedLocations] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/coffees')
//       .then(res => res.json())
//       .then(data => setCoffees(data))
//       .catch(err => console.error('Fetch error:', err))
//   }, [])

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop coffees={coffees} setCoffees={setCoffees} />} />
//         <Route path="/admin_portal" element={<AdminPortal coffees={coffees} setCoffees={setCoffees} />} />
//       </Routes>
//     </BrowserRouter>

//   )
// }

// export default App



import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import AdminPortal from './pages/AdminPortal'

const App = () => {
  const [coffees, setCoffees] = useState([])
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

 useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const [storeInfoRes, locationsRes, coffeesRes] = await Promise.all([
        fetch('http://localhost:3000/store_info'),
        fetch('http://localhost:3000/locations'),
        fetch('http://localhost:3000/coffees')
      ]);
      
      //const storeInfo = await storeInfoRes.json();
      const locations = await locationsRes.json();
      const coffees = await coffeesRes.json();
      
      setCoffees(coffees);
      setLocations(locations);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/shop" 
          element={
            <Shop 
              coffees={coffees} 
              locations={locations} 
            />
          } 
        />
        <Route 
          path="/admin_portal" 
          element={
            <AdminPortal 
              coffees={coffees} 
              setCoffees={setCoffees}
              locations={locations} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App