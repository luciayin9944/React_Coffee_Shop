import { useState, useEffect } from 'react'
import CoffeeCard from './CoffeeCard'
import LocationList from './LocationList'
import NavBar from '../components/NavBar';

function Shop() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/coffees')
      .then(res => res.json())
      .then(data => setCoffees(data))
      .catch(err => console.error('Fetch error:', err))
  }, [])

  return (
    <>
        <NavBar />
        <div>
          <div className="shop">
            <LocationList />
            <div className="coffee-grid">
            {coffees.map(coffee => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Shop