import React from 'react'

function LocationList({ locations, selectedLocations, setSelectedLocations }) {
  const handleLocationChange = (locationId, isChecked) => {
    if (isChecked) {
      setSelectedLocations([...selectedLocations, locationId])
    } else {
      setSelectedLocations(selectedLocations.filter(id => id !== locationId))
    }
  }

  return (
    <div className="location-list">
      <h3>Search</h3>
      {locations.map(location => (
        <label key={location.id} className="location-item">
          <input 
            type="checkbox" 
            checked={selectedLocations.includes(location.id)}
            onChange={(e) => handleLocationChange(location.id, e.target.checked)} 
          /> 
          {location.name}
        </label>
      ))}
    </div>
  )
}

export default LocationList



// function LocationList() {
//   return (
//     <div className="location-list">
//       <button>Search</button>
//       <label><input type="checkbox" /> Location 1</label>
//       <label><input type="checkbox" /> Location 2</label>
//       <label><input type="checkbox" /> Location 3</label>
//       <label><input type="checkbox" /> Location 4</label>
//     </div>
//   )
// }

// export default LocationList
