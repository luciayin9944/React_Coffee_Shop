import NavBar from "../components/NavBar"
import { useState } from 'react'


function AdminPortal({ coffees, setCoffees, locations }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [origin, setOrigin] = useState('')
    const [price, setPrice] = useState('')
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [successMessage, setSuccessMessage] = useState('')
      
     
    const handleSubmit = (e) => {
      e.preventDefault()
      const newCoffee = { 
        name, 
        description, 
        origin, 
        price: parseFloat(price),
        locations: selectedLocation ? [Number(selectedLocation)] : []
      }

      fetch('http://localhost:3000/coffees', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCoffee)
      })
        .then(res => res.json())
        .then(data => {
          setCoffees([...coffees, data])
          setSuccessMessage("Coffee submitted successfully!")

          //reset
          setName('');
          setDescription('');
          setOrigin('');
          setPrice('');
          setSelectedLocation(null);
        })
        .catch(err => console.error('Error posting coffee:', err))
    }
    
    return (
        <>
            <NavBar />
            <div className="form-container">
              <form onSubmit={handleSubmit} className="coffee-form">
                <label>Coffee Name</label>
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
        
                <label>Description</label>
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        
                <label>Origin</label>
                <input name="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        
                <label>Price</label>
                <input name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

                <label>Select Location</label>
                <select
                    value={selectedLocation || ''}
                    onChange={(e) => setSelectedLocation(e.target.value || null)}
                    className="location-select"
                >
                    <option value="">-- Select a location --</option>
                    {locations.map(location => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>
                
                
                <button type="submit">Submit</button>
              </form>
              {successMessage && (
                <p>{successMessage}</p>
              )}
            </div>
        </>
    )
}


export default AdminPortal;




// import NavBar from "../components/NavBar"
// import { NavLink } from "react-router-dom";
// import React, { useState } from 'react'


// function AdminPortal({ coffees, setCoffees }) {
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')
//     const [origin, setOrigin] = useState('')
//     const [price, setPrice] = useState('')
//     const [successMessage, setSuccessMessage] = useState('')
      
     
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       const newCoffee = { name: name, description: description, origin: origin, price: price }
//       fetch('http://localhost:3000/coffees', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(newCoffee)
//       })
//         .then(res => res.json())
//         .then(data => {
//           //addCoffee(data)
//           setCoffees([...coffees, data])
//           setSuccessMessage("Coffee submitted successfully!")

//           //reset
//           setName('')
//           setDescription('')
//           setOrigin('')
//           setPrice('')
//         })
//         .catch(err => console.error('Error posting coffee:', err))
//     }
    
//     return (
//         <>
//             <NavBar />
//             <div className="form-container">
//               <form onSubmit={handleSubmit} className="coffee-form">
//                 <label>Coffee Name</label>
//                 <input name="name" onChange={(e) => setName(e.target.value)} />
        
//                 <label>Description</label>
//                 <textarea name="description" onChange={(e) => setDescription(e.target.value)} />
        
//                 <label>Origin</label>
//                 <input name="origin" onChange={(e) => setOrigin(e.target.value)} />
        
//                 <label>Price</label>
//                 <input name="price" onChange={(e) => setPrice(e.target.value)} />
        
//                 <button type="submit">Submit</button>
//               </form>
//               {successMessage && (
//                 <p>{successMessage}</p>
//               )}
//             </div>
//         </>
//     )
// }


// export default AdminPortal;