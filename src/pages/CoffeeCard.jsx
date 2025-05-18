
function CoffeeCard({ coffee }) {
  return (
    <div className="coffee-card">
      <h4>{coffee.name}</h4>
      <p>{coffee.description}</p>
      <p>{coffee.origin}</p>
      <p>${coffee.price}</p>
    </div>
  )
}
export default CoffeeCard

