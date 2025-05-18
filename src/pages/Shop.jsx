import { useState } from 'react'
import CoffeeCard from './CoffeeCard'
import LocationList from './LocationList'
import NavBar from '../components/NavBar'

function Shop({ coffees, locations }) {
  const [selectedLocations, setSelectedLocations] = useState([])

  const filteredCoffees = selectedLocations.length > 0
  ? coffees.filter(coffee => 
      coffee.locations.some(loc => selectedLocations.includes(loc))
  )
  : coffees

  return (
    <>
      <NavBar />
      <div className="shop-container">
        <div className="shop">
          <LocationList 
            locations={locations}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
          />
          <div className="coffee-grid">
            {filteredCoffees.map(coffee => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop




// import { useState, useEffect } from 'react'
// import CoffeeCard from './CoffeeCard'
// import LocationList from './LocationList'
// import NavBar from '../components/NavBar';

// function Shop() {
//   const [coffees, setCoffees] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:3000/coffees')
//       .then(res => res.json())
//       .then(data => setCoffees(data))
//       .catch(err => console.error('Fetch error:', err))
//   }, [])

//   return (
//     <>
//         <NavBar />
//         <div>
//           <div className="shop">
//             <LocationList />
//             <div className="coffee-grid">
//             {coffees.map(coffee => (
//                 <CoffeeCard key={coffee.id} coffee={coffee} />
//             ))}
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default Shop

